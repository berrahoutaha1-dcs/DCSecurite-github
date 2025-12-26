<?php
// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Optional: verify GitHub secret (recommended for security)
$secret = 'alfA0dayTahati28';
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE'] ?? $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

$payload = file_get_contents('php://input');
$hash = 'sha256=' . hash_hmac('sha256', $payload, $secret);

// Fallback for sha1 if using older GitHub hooks, though modern is sha256
// Note: $signature usually comes as "sha256=..." so we compare directly against $hash which includes that prefix.

if (!hash_equals($hash, $signature)) {
    // Basic logging for debugging
    file_put_contents('webhook.log', date('Y-m-d H:i:s') . " - Invalid Signature\n", FILE_APPEND);
    http_response_code(403);
    exit('Invalid signature');
}

// Run the deploy script
$output = shell_exec('./deploy.sh 2>&1');
file_put_contents('webhook.log', date('Y-m-d H:i:s') . " - Deploy Output: $output\n", FILE_APPEND);
echo "<pre>$output</pre>";
?>
