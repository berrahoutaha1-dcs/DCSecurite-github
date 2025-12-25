export function StudentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Students</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Add Student
                </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Course</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Progress</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {[1, 2, 3].map((i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Student Name {i}</td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Cybersecurity Basics</td>
                                <td className="px-6 py-4">
                                    <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500" style={{ width: `${i * 30}%` }}></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-400 hover:text-blue-500 cursor-pointer">View</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
