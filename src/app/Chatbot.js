"use client";
import { useState, useRef, useEffect } from "react";

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
          { from: "bot", text: data.reply || "Sorry, I couldn't get a response right now." }
        ]);
      } else {
        const data = await res.json();
        setMessages((msgs) => [
          ...msgs,
          { from: "bot", text: data.reply || "Sorry, I couldn't get a response right now." }
        ]);
      }
    } catch (err) {
      setError("Network or server error. Check your API key and server logs.");
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, I couldn't get a response right now." }
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
        <button
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl focus:outline-none"
          aria-label="Open chatbot"
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}
      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end pointer-events-none">
          <div className="relative w-full max-w-sm pointer-events-auto">
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-[500px] border border-blue-200">
              <div className="px-4 py-3 border-b font-bold text-blue-700 flex items-center justify-between rounded-t-2xl bg-blue-50">
                <span>Tax Assistant</span>
                <div className="flex gap-2">
                  <button className="text-xs text-blue-600 border border-blue-200 rounded px-2 py-1 hover:bg-blue-100" onClick={handleClear} aria-label="Clear chat">Clear Chat</button>
                  <button className="text-gray-400 hover:text-gray-700 text-xl font-bold" onClick={() => setOpen(false)} aria-label="Close chatbot">×</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-blue-50">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} items-end`}>
                    {msg.from === "bot" && <img src={BOT_AVATAR} alt="Bot" className="w-7 h-7 rounded-full mr-2 border border-blue-200 bg-white" />}
                    <div className={`rounded-xl px-3 py-2 max-w-[80%] text-sm shadow ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}>{msg.text}</div>
                    {msg.from === "user" && <img src={USER_AVATAR} alt="You" className="w-7 h-7 rounded-full ml-2 border border-gray-200 bg-white" />}
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start items-end">
                    <img src={BOT_AVATAR} alt="Bot" className="w-7 h-7 rounded-full mr-2 border border-blue-200 bg-white" />
                    <div className="rounded-xl px-3 py-2 max-w-[80%] text-sm bg-white text-gray-400 shadow animate-pulse">Typing…</div>
                  </div>
                )}
                <div ref={messagesEndRef} />
                {error && <div className="text-xs text-red-500 mt-2">{error}</div>}
              </div>
              <form onSubmit={handleSend} className="p-3 border-t flex gap-2 bg-white">
                <input
                  type="text"
                  className="flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Type your question..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  autoFocus
                  maxLength={300}
                  aria-label="Type your question"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 font-semibold text-sm">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 