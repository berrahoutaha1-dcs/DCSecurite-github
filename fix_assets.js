const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const srcDir = path.join(__dirname, 'src');

walkDir(srcDir, (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace imports: import foo from 'figma:asset/bar.png' -> const foo = "/assets/bar.png"
    // Regex handles ' or " and optional ;
    content = content.replace(/import\s+(\w+)\s+from\s+['"]figma:asset\/(.+)['"];?/g, 'const $1 = "/assets/$2";');

    // Replace string literals in src: src="figma:asset/bar.png" -> src="/assets/bar.png"
    // Also handles '
    content = content.replace(/src=['"]figma:asset\/(.+)['"]/g, 'src="/assets/$1"');

    // Also fix the one I changed manually in Header.tsx to use the new standard if desired, 
    // but honestly import from ../assets is fine too. 
    // Let's strictly target figma:asset first.

    if (content !== originalContent) {
        console.log(`Updating ${filePath}`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log("Finished replacing assets.");
