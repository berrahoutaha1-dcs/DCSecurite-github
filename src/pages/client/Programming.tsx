import { useState } from "react";
import { Code, MessageSquare, ArrowLeft, Send } from "lucide-react";
import { motion } from "framer-motion";
import { WebDevelopmentSpecificationForm } from "../../components/WebDevelopmentSpecificationForm";

const programmingServices = [
    { id: 'web', name: "Web Development", description: "Custom websites and web applications." },
    { id: 'mobile', name: "Mobile App Development", description: "iOS and Android apps." },
    { id: 'api', name: "API Integration", description: "Connect your systems seamlessly." },
    { id: 'custom', name: "Custom Software", description: "Tailored software solutions." },
];

export function ClientProgramming() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [messages, setMessages] = useState<{ role: 'ai' | 'user', content: string }[]>([]);
    const [input, setInput] = useState("");

    const handleSelectService = (serviceName: string) => {
        setSelectedService(serviceName);
        setMessages([
            { role: 'ai', content: `Hello, I am a programming expert. Tell me more about the ${serviceName} you want to develop.` }
        ]);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input } as const];
        setMessages(newMessages);
        setInput("");

        // Mock AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', content: "That sounds interesting! Could you provide more details about the specific features needed?" }]);
        }, 1000);
    };

    return (
        <div className="space-y-6 h-[calc(100vh-140px)] flex flex-col">
            {!selectedService ? (
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Code className="w-8 h-8 text-blue-500" />
                        Programming Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programmingServices.map((service) => (
                            <motion.button
                                key={service.id}
                                onClick={() => handleSelectService(service.name)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500 dark:hover:border-blue-500 transition-colors group shadow-sm hover:shadow-md"
                            >
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{service.description}</p>
                            </motion.button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50 dark:bg-slate-950">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </button>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">{selectedService} Specification</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                {selectedService === "Web Development" ? "Fill out the specification form" : "Consulting with AI Expert"}
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto">
                        {selectedService === "Web Development" ? (
                            <div className="p-4">
                                <WebDevelopmentSpecificationForm />
                            </div>
                        ) : (
                            /* Existing Chat Logic */
                            <div className="flex flex-col h-full">
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {messages.map((msg, idx) => (
                                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-sm'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-tl-sm'
                                                }`}>
                                                <p className="text-sm">{msg.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Input */}
                                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                    <form onSubmit={handleSend} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Describe your requirements..."
                                            className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!input.trim()}
                                            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
