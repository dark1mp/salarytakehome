"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { Calculator } from 'lucide-react';

const BOT_AVATAR = "/globe.svg";
const USER_AVATAR = "/window.svg";

const INITIAL_MESSAGES = [
  { from: "bot", text: "Hi! I'm your tax assistant. Ask me anything about using this calculator. I don't collect or store any personal data." }
];

export default function Chatbot({ context }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    setError("");
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setTyping(true);
    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, context })
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.reply || "API error");
        setMessages((msgs) => [
          ...msgs,
          { from: "bot", text: data.reply || "Sorry, I couldn&apos;t get a response right now." }
        ]);
      } else {
        const data = await res.json();
        setMessages((msgs) => [
          ...msgs,
          { from: "bot", text: data.reply || "Sorry, I couldn&apos;t get a response right now." }
        ]);
      }
    } catch (err) {
      setError("Network or server error. Check your API key and server logs.");
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, I couldn&apos;t get a response right now." }
      ]);
      console.error("Chatbot fetch error:", err);
    }
    setTyping(false);
  };

  const handleClear = () => {
    setMessages(INITIAL_MESSAGES);
    setError("");
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
          <button
            className="bg-[#1566a0] hover:bg-blue-800 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl focus:outline-none border-4 border-white"
            aria-label="Open chatbot"
            onClick={() => setOpen(true)}
          >
            <Calculator className="w-8 h-8 text-white" />
          </button>
          {/* Floating label always visible and clickable */}
          <button
            className="mt-2 bg-white text-[#1566a0] px-3 py-1 rounded-full shadow text-xs font-semibold border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#1566a0]"
            onClick={() => setOpen(true)}
            aria-label="Open chatbot via label"
            tabIndex={0}
          >
            Chat with AI
          </button>
        </div>
      )}
      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end pointer-events-none">
          <div className="relative w-full max-w-sm pointer-events-auto">
            <div className="bg-gradient-to-br from-[#e6f2fa] via-white to-[#d1f5e0] rounded-3xl shadow-2xl flex flex-col h-[520px] border border-[#1566a0]/30">
              <div className="px-4 py-3 border-b flex items-center justify-between rounded-t-3xl" style={{ background: '#1566a0' }}>
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Calculator className="w-6 h-6 text-white" />
                  Tax Assistant
                </div>
                <div className="flex gap-2">
                  <button className="text-xs text-white border border-white/40 rounded px-2 py-1 hover:bg-white/10" onClick={handleClear} aria-label="Clear chat">Clear</button>
                  <button className="text-white hover:text-gray-200 text-xl font-bold" onClick={() => setOpen(false)} aria-label="Close chatbot">×</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-transparent">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} items-end`}>
                    {msg.from === "bot" && <Image src={BOT_AVATAR} alt="Bot" width={28} height={28} className="w-7 h-7 rounded-full mr-2 border border-blue-200 bg-white" />}
                    <div className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm shadow-md ${msg.from === "user" ? "bg-[#1566a0] text-white" : "bg-white text-gray-800 border border-blue-100"}`}>{msg.text}</div>
                    {msg.from === "user" && <Image src={USER_AVATAR} alt="You" width={28} height={28} className="w-7 h-7 rounded-full ml-2 border border-gray-200 bg-white" />}
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start items-end">
                    <Image src={BOT_AVATAR} alt="Bot" width={28} height={28} className="w-7 h-7 rounded-full mr-2 border border-blue-200 bg-white" />
                    <div className="rounded-2xl px-4 py-2 max-w-[80%] text-sm bg-white text-gray-400 shadow-md animate-pulse border border-blue-100">Typing…</div>
                  </div>
                )}
                <div ref={messagesEndRef} />
                {error && <div className="text-xs text-red-500 mt-2">{error}</div>}
              </div>
              <form onSubmit={handleSend} className="p-3 border-t flex gap-2 bg-white rounded-b-3xl">
                <input
                  type="text"
                  className="flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1566a0]"
                  placeholder="Type your question..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  autoFocus
                  maxLength={300}
                  aria-label="Type your question"
                />
                <button type="submit" className="bg-[#1566a0] hover:bg-blue-800 text-white rounded-xl px-4 py-2 font-semibold text-sm shadow">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 