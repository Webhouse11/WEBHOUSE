import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Phone, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { getChatSession } from '../services/geminiService';

const INITIAL_GREETING = `👋 Hello! Welcome to Webhouse Media & Marketing Studio.
Thank you for reaching out. We’re excited to help you build, automate, and grow your business digitally.
To help us serve you faster, please tell us:
1️⃣ Are you interested in Website & App Development?
2️⃣ Digital Sales & Marketing Systems?
3️⃣ Graphic & Business Branding?
4️⃣ Social Media Management?
5️⃣ Or Other Inquiries?
📌 One of our team members will get back to you within a few minutes.
While you wait, you can also check our services here: 🚀 https://webhousemedia.vercel.app/
Thank you for choosing Webhouse Media & Marketing Studio – where ideas become systems, and systems become results!`;

const WHATSAPP_URL = `https://wa.me/2348152469749?text=${encodeURIComponent(INITIAL_GREETING)}`;

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: INITIAL_GREETING }]);
      setChatSession(getChatSession());
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userMessage = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const result = await chatSession.sendMessage(userMessage);
      const responseText = result.response.text;
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm experiencing a high volume of requests. Please try again or chat with us directly on WhatsApp for faster service!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[380px] h-[600px] mb-6 glass border border-slate-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-6 bg-brand-dark border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-tight">Webhouse Assistant</h3>
                <div className="flex items-center gap-1.5 text-[10px] text-indigo-400 font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online Now
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-slate-900 border border-slate-800 text-slate-300 rounded-tl-none whitespace-pre-wrap'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Direct WhatsApp Link */}
          <div className="px-6 py-3 bg-slate-950/50 border-t border-slate-800">
            <a 
              href={WHATSAPP_URL}
              target="_blank" 
              className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              Direct Human Support <Phone size={12} />
            </a>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-6 bg-brand-dark border-t border-slate-800 flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about your business growth..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button 
              type="submit" 
              disabled={isTyping}
              className="w-12 h-12 bg-white text-brand-dark rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors shrink-0 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-6 rounded-[2rem] shadow-2xl transition-all duration-500 hover:scale-105 flex items-center gap-3 ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-[#25D366] text-white shadow-[#25D366]/20'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-black uppercase tracking-widest">
            Chat With Assistant
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;