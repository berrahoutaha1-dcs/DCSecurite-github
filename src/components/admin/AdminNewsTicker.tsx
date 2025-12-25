import { useState, useEffect } from "react";
import { Plus, Trash2, Save, GripVertical, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL } from "../../config";

interface NewsItem {
    id: number;
    content: string;
    is_active: boolean;
    order: number;
}

export function AdminNewsTicker() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [newItemParams, setNewItemParams] = useState({ content: "", is_active: true });

    const BASE_URL = `${API_BASE_URL}/api`;
    const getHeaders = () => {
        const token = localStorage.getItem("token");
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
    };

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/admin/news-ticker`, {
                headers: getHeaders()
            });
            if (!response.ok) throw new Error("Failed to fetch news");
            const data = await response.json();
            setNews(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newItemParams.content.trim()) return;

        try {
            // Calculate next order
            const maxOrder = news.reduce((max, item) => Math.max(max, item.order), 0);

            const response = await fetch(`${BASE_URL}/admin/news-ticker`, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify({ ...newItemParams, order: maxOrder + 1 })
            });

            if (!response.ok) throw new Error("Failed to add news");

            const addedNews = await response.json();
            setNews([...news, addedNews]);
            setNewItemParams({ content: "", is_active: true });
            showSuccess("News item added successfully");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to add news");
        }
    };

    const handleUpdate = async (id: number, updates: Partial<NewsItem>) => {
        try {
            // Optimistic update
            setNews(news.map(item => item.id === id ? { ...item, ...updates } : item));

            const response = await fetch(`${BASE_URL}/admin/news-ticker/${id}`, {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify(updates)
            });

            if (!response.ok) {
                // Revert on failure (simplified, ideally refetch)
                fetchNews();
                throw new Error("Failed to update news");
            }
            showSuccess("News item updated");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to update news");
        }
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;

        try {
            const response = await fetch(`${BASE_URL}/admin/news-ticker/${id}`, {
                method: "DELETE",
                headers: getHeaders()
            });

            if (!response.ok) throw new Error("Failed to delete news");

            setNews(news.filter(item => item.id !== id));
            showSuccess("News item deleted");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to delete news");
        }
    };

    const showSuccess = (msg: string) => {
        setSuccess(msg);
        setTimeout(() => setSuccess(null), 3000);
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">News Ticker Management</h1>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                    <button onClick={() => setError(null)} className="ml-auto underline">Dismiss</button>
                </div>
            )}

            {success && (
                <div className="bg-emerald-50 text-emerald-600 p-4 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    {success}
                </div>
            )}

            {/* Add New Form */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Add New Item</h2>
                <form onSubmit={handleAdd} className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Content</label>
                        <input
                            type="text"
                            value={newItemParams.content}
                            onChange={(e) => setNewItemParams({ ...newItemParams, content: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter news text..."
                        />
                    </div>
                    <div className="flex items-center gap-2 pb-2">
                        <input
                            type="checkbox"
                            id="isActive"
                            checked={newItemParams.is_active}
                            onChange={(e) => setNewItemParams({ ...newItemParams, is_active: e.target.checked })}
                            className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="isActive" className="text-sm font-medium text-slate-700 dark:text-slate-300">Active</label>
                    </div>
                    <button
                        type="submit"
                        disabled={!newItemParams.content}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add
                    </button>
                </form>
            </div>

            {/* News List */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Content</th>
                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white w-32">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white w-32">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {news.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        value={item.content}
                                        onChange={(e) => handleUpdate(item.id, { content: e.target.value })}
                                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-slate-900 dark:text-slate-200"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleUpdate(item.id, { is_active: !item.is_active })}
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${item.is_active
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                            : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                                            }`}
                                    >
                                        {item.is_active ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {news.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                                    No news items found. Add one above.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
