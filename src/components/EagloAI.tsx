import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { API_BASE_URL } from "../config";
import {
  ArrowUp,
  Sparkles,
  Copy,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Mic,
  Search,
  Edit2,
  Home,
  Plus,
  MessageSquare,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";
const backgroundImage = "/assets/eaglo-ai-bg.png";
const eagloLogo = "/assets/516afcd5e1cf505cf97144b9c612c9524eb23e3e.png";

interface EagloAIProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onIndustriesClick?: () => void;
  onBlogClick?: () => void;
  onWhatsNewClick?: () => void;
  onERPClick?: () => void;
  onCRMClick?: () => void;
  onHRMClick?: () => void;
  onIndustrialClick?: () => void;
  onConstructionClick?: () => void;
  onLogisoft360Click?: () => void;
  onUIUXDesignClick?: () => void;
  onWebDevelopmentClick?: () => void;
  onMobileDevelopmentClick?: () => void;
  onUnderAttackClick?: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  feedback?: "up" | "down" | null;
}

export const EagloAI: React.FC<EagloAIProps> = ({ onHomeClick }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<string | null>(null);
  const [recentChats, setRecentChats] = useState<{ id: string; title: string; timestamp: string }[]>([]);

  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isRTL = (text: string) => {
    const arabic = /[\u0600-\u06FF]/;
    const hebrew = /[\u0590-\u05FF]/;
    return arabic.test(text) || hebrew.test(text);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    fetchHistory();
    // Track AI Usage Visit
    fetch(`${API_BASE_URL}/api/analytics/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "ai" }),
    }).catch(() => { });
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/eaglo/history`);
      if (res.ok) {
        const data = await res.json();
        setRecentChats(data);
      }
    } catch (err) {
      console.error("Failed to fetch history", err);
    }
  };

  const loadChat = async (id: string) => {
    try {
      setMessages([]);
      setChatId(id);
      setIsSidebarOpen(false); // Optional: close sidebar on mobile

      const res = await fetch(`${API_BASE_URL}/api/eaglo/chat/${id}`);
      if (res.ok) {
        const data = await res.json();
        const loadedMessages = data.messages.map((msg: any) => ({
          id: msg.id,
          text: msg.text,
          sender: msg.sender,
          timestamp: new Date(msg.timestamp),
          feedback: msg.feedback
        }));
        setMessages(loadedMessages);
      }
    } catch (err) {
      console.error("Failed to load chat", err);
    }
  };

  const sendMessageToAI = async (text: string) => {
    setIsTyping(true);
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/ask-eaglo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          message: text,
          chat_id: chatId // Send current chat ID
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update chatId if this was a new chat
        if (data.chat_id && data.chat_id !== chatId) {
          setChatId(data.chat_id);
          fetchHistory(); // Refresh history list
        }

        if (data.limit_reached) {
          setIsLimitReached(true);
          const limitMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: data.response || "You have reached the limit of free questions.",
            sender: "ai",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, limitMessage]);
        } else if (data.response) {
          const aiMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: data.response,
            sender: "ai",
            timestamp: new Date(),
            feedback: null, // Initialize feedback
          };
          setMessages((prev) => [...prev, aiMessage]);
        }
      } else {

        console.error("AI Error:", data);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.error || "Sorry, I encountered an error while processing your request.",
          sender: "ai",
          timestamp: new Date(),
          feedback: null, // Initialize feedback
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Network Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I cannot connect to the server right now. Please check your internet connection.",
        sender: "ai",
        timestamp: new Date(),
        feedback: null, // Initialize feedback
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    await sendMessageToAI(userMessage.text);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleRegenerate = () => {
    // Find the last user message
    const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user');
    if (lastUserMsg) {
      sendMessageToAI(lastUserMsg.text);
    }
  };

  const handleFeedback = (id: string, type: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === id) {
        if (msg.feedback === type) return { ...msg, feedback: null };
        return { ...msg, feedback: type };
      }
      return msg;
    }));
  };

  const handleShare = async (text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Eaglo AI Response',
          text: text
        });
      } catch (err) {
        // ignore share cancellation
      }
    } else {
      handleCopy(text);
    }
  };

  const handleEdit = (id: string, text: string) => {
    setMessage(text);
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setMessage("");
    setChatId(null); // Clear ID for new chat
    fetchHistory();
    setIsTyping(false);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Initial screen (before any messages)
  if (messages.length === 0) {
    return (
      <div
        className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden flex flex-col relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 relative z-10">
          <div className="w-full max-w-2xl">
            {/* Header with Icon and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <motion.h1
                className="text-xl text-white/90 relative"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 1],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(13, 110, 255, 0.8), 0 0 40px rgba(13, 110, 255, 0.5)",
                      "0 0 30px rgba(13, 110, 255, 1), 0 0 60px rgba(13, 110, 255, 0.7)",
                      "0 0 20px rgba(13, 110, 255, 0.8), 0 0 40px rgba(13, 110, 255, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Cybersecurity issue ,How can I help you ?
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Input Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Input Box */}
              <div className="bg-[#1C1C1C] rounded-3xl p-6 border border-[#2A2A2A]">
                {/* Text Input Area */}
                <div className="mb-4">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Eaglo ?"
                    rows={1}
                    className="w-full bg-transparent outline-none text-white/60 placeholder:text-white/40 text-base resize-none overflow-hidden"
                    style={{ minHeight: "24px", maxHeight: "200px" }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = Math.min(target.scrollHeight, 200) + "px";
                    }}
                  />
                </div>

                {/* Bottom Controls */}
                <div className="flex items-center justify-between">
                  {/* Right Side - Icons */}
                  <div className="flex items-center gap-3 ml-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`p-2.5 rounded-full transition-all ${message.trim()
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        : "bg-[#2A2A2A] opacity-50 cursor-not-allowed"
                        }`}
                    >
                      <ArrowUp className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Footer Text */}
              <div className="text-center mt-4 space-y-1">
                <p className="text-white/40 text-sm font-medium">" Eaglo AI " Powered by DCSecurite Company</p>
                <p className="text-white/30 text-xs">All right reserved 2025/2026</p>
                <p className="text-white/20 text-[10px] pt-1">v1.1.0</p>
              </div>
            </motion.div>
          </div>
        </div >
      </div >
    );
  }

  // Chat screen (after first message is sent)
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: isSidebarOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full w-[280px] bg-[#1A1A1A] border-r border-[#2A2A2A] z-50 flex flex-col"
      >
        {/* Sidebar Top Section */}
        <div className="p-4 border-b border-[#2A2A2A]">
          {/* Home Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#2A2A2A] hover:bg-[#333333] rounded-lg transition-colors mb-3"
            onClick={() => navigate(ROUTES.HOME)}
          >
            <Home className="w-5 h-5 text-white/70" />
            <span className="text-white/90 text-sm">Home</span>
          </motion.button>

          {/* New Chat Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all"
            onClick={handleNewChat}
          >
            <Plus className="w-5 h-5 text-white" />
            <span className="text-white text-sm">New Chat</span>
          </motion.button>
        </div>

        {/* Recent Chats */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-white/50 text-xs uppercase mb-3 px-2">Recent Chats</h3>

          {/* Chat History Items */}
          <div className="space-y-2">
            {recentChats.map((chat) => (
              <motion.button
                key={chat.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => loadChat(chat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${chat.id === chatId ? "bg-[#2A2A2A] border border-blue-500/30" : "bg-[#2A2A2A]/50 hover:bg-[#2A2A2A]"
                  }`}
              >
                <MessageSquare className="w-4 h-4 text-white/50 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-sm truncate">{chat.title}</p>
                  <p className="text-white/40 text-xs text-nowrap">
                    {new Date(chat.timestamp).toLocaleDateString(undefined, {
                      month: 'short', day: 'numeric'
                    })}
                  </p>
                </div>
              </motion.button>
            ))}

            {recentChats.length === 0 && (
              <p className="text-white/30 text-xs px-2 italic">No recent chats</p>
            )}
          </div>
        </div>

        {/* Sidebar Bottom */}
        <div className="p-4 border-t border-[#2A2A2A]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img src={eagloLogo} alt="Eaglo Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/90 text-sm truncate">Eaglo</p>
              <p className="text-white/50 text-xs">Online</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Toggle Sidebar Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-4 z-50 p-2 bg-[#2A2A2A] hover:bg-[#333333] rounded-lg transition-all ${isSidebarOpen ? "left-[292px]" : "left-4"
          }`}
      >
        <motion.div animate={{ rotate: isSidebarOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-[280px]" : "ml-0"}`}
      >
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl mx-auto w-full">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-6 ${msg.sender === "user" ? "flex justify-end" : ""}`}
              >
                {msg.sender === "user" ? (
                  // User Message (Right side)
                  <div className="flex items-start gap-3 max-w-[80%]">
                    <div className="bg-[#2A2A2A] rounded-2xl rounded-tr-sm px-5 py-3">
                      <p
                        className={`text-white text-sm leading-relaxed whitespace-pre-wrap ${isRTL(msg.text) ? 'text-right' : 'text-left'}`}
                        dir={isRTL(msg.text) ? 'rtl' : 'ltr'}
                      >
                        {msg.text}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <button
                        onClick={() => handleCopy(msg.text)}
                        className="text-white/50 hover:text-white/80 transition-colors"
                        title="Copy"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(msg.id, msg.text)}
                        className="text-white/50 hover:text-white/80 transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  // AI Message (Left side)
                  <div className="max-w-[90%]">
                    <div className="bg-transparent mb-3">
                      <p
                        className={`text-white text-sm leading-relaxed whitespace-pre-wrap ${isRTL(msg.text) ? 'text-right' : 'text-left'}`}
                        dir={isRTL(msg.text) ? 'rtl' : 'ltr'}
                      >
                        {msg.text}
                      </p>
                    </div>
                    {/* Action Icons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCopy(msg.text)}
                        className="text-white/40 hover:text-white/70 transition-colors"
                        title="Copy"
                      >
                        <Copy className="w-4 h-4" />
                      </button>

                      {/* Only show regenerate on the latest AI message if not typing */}
                      {index === messages.length - 1 && !isTyping && (
                        <button
                          onClick={handleRegenerate}
                          className="text-white/40 hover:text-white/70 transition-colors"
                          title="Regenerate"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={() => handleFeedback(msg.id, 'up')}
                        className={`transition-colors ${msg.feedback === 'up' ? 'text-green-500' : 'text-white/40 hover:text-white/70'}`}
                        title="Good response"
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleFeedback(msg.id, 'down')}
                        className={`transition-colors ${msg.feedback === 'down' ? 'text-red-500' : 'text-white/40 hover:text-white/70'}`}
                        title="Bad response"
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare(msg.text)}
                        className="text-white/40 hover:text-white/70 transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-white/50 text-sm"
            >
              <div className="flex gap-1">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-white/50 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-white/50 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-white/50 rounded-full"
                />
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Bottom Input Area - Fixed */}
        <div className="border-t border-[#2A2A2A] bg-[#0F0F0F] sticky bottom-0">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="bg-[#1C1C1C] rounded-3xl p-4 border border-[#2A2A2A]">
              {/* Text Input */}
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Eaglo"
                rows={1}
                disabled={isLimitReached}
                className={`w-full bg-transparent outline-none text-white/60 placeholder:text-white/40 text-sm resize-none overflow-hidden mb-3 ${isLimitReached ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ minHeight: "24px", maxHeight: "150px" }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = Math.min(target.scrollHeight, 150) + "px";
                }}
              />

              {/* Limit Reached CTA */}
              {isLimitReached && (
                <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-xl flex flex-col items-center gap-2">
                  <p className="text-red-200 text-sm text-center">
                    You have reached your free question limit.
                  </p>
                  <button
                    onClick={() => navigate(ROUTES.CONTACT)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-bold rounded-lg transition-all shadow-lg hover:shadow-red-500/20"
                  >
                    Contact Expert
                  </button>
                </div>
              )}

              {/* Bottom Controls */}
              <div className="flex items-center justify-end">
                {/* Right Side - Icons */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className={`p-2 rounded-full transition-all ${message.trim()
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                      : "bg-[#2A2A2A] opacity-50 cursor-not-allowed"
                      }`}
                  >
                    <ArrowUp className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-center mt-3 space-y-0.5">
              <p className="text-white/40 text-xs font-medium">" Eaglo AI " Powered by DCSecurite Company</p>
              <p className="text-white/30 text-[10px]">All right reserved 2025/2026</p>
              <p className="text-white/20 text-[9px] pt-0.5">v1.1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EagloAI;
