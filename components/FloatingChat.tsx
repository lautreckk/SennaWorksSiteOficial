"use client";
import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  content: string;
  sender: "user" | "ai";
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Olá! 👋 Sou a IA da Sena Works. Me conta, o que você precisa? Um site, sistema com IA, tráfego pago, ou algo diferente?",
    sender: "ai",
  },
];

const quickReplies = [
  "Quero criar um site",
  "Preciso de IA para WhatsApp",
  "Quero tráfego pago",
];

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: "assistant", content: initialMessages[0].content },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now(), content, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const newHistory: ChatMessage[] = [...chatHistory, { role: "user", content }];
    setChatHistory(newHistory);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      const aiContent = data.content || "Desculpe, tive um problema. Pode repetir?";

      const aiMsg: Message = { id: Date.now() + 1, content: aiContent, sender: "ai" };
      setMessages((prev) => [...prev, aiMsg]);
      setChatHistory((prev) => [...prev, { role: "assistant", content: aiContent }]);
    } catch {
      const errorMsg: Message = {
        id: Date.now() + 1,
        content: "Ops, tive um problema de conexão. Tente novamente em alguns segundos!",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            style={{
              position: "fixed", bottom: 24, right: 24, zIndex: 999,
              width: 60, height: 60, borderRadius: "50%",
              backgroundColor: "#DD0C29", color: "#fff",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 32px rgba(221,12,41,0.35), 0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <div style={{
              position: "absolute", top: 0, right: 0, width: 16, height: 16,
              backgroundColor: "#4ADE80", borderRadius: "50%", border: "3px solid #fff",
            }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", bottom: 24, right: 24, zIndex: 999,
              width: 380, height: 560, maxHeight: "calc(100vh - 48px)",
              borderRadius: 20, overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
              display: "flex", flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px 20px", backgroundColor: "#1C1C1C",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                backgroundColor: "#DD0C29", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" /><rect x="8" y="8" width="8" height="8" rx="1" />
                  <path d="M4 12H2" /><path d="M22 12h-2" /><path d="M12 2v2" /><path d="M12 22v-2" />
                  <path d="M20 20l-2-2" /><path d="M4 4l2 2" /><path d="M20 4l-2 2" /><path d="M4 20l2-2" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Sena Works IA</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ADE80" }} />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Online agora</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(255,255,255,0.5)", padding: 4,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: 8, transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" /><path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1, overflowY: "auto", padding: "16px 16px 8px",
              display: "flex", flexDirection: "column", gap: 12,
              backgroundColor: "#F6F4F0",
            }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div style={{
                    maxWidth: "80%", padding: "10px 14px", borderRadius: 16,
                    fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-wrap",
                    ...(msg.sender === "user"
                      ? {
                          backgroundColor: "#1C1C1C", color: "#fff",
                          borderBottomRightRadius: 4,
                        }
                      : {
                          backgroundColor: "#fff", color: "#1C1C1C",
                          borderBottomLeftRadius: 4,
                          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                        }),
                  }}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <div style={{
                    backgroundColor: "#fff", padding: "12px 16px", borderRadius: 16,
                    borderBottomLeftRadius: 4, display: "flex", gap: 4,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        style={{
                          width: 6, height: 6, borderRadius: "50%",
                          backgroundColor: "#969696",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.length === 1 && !isTyping && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                  {quickReplies.map((reply) => (
                    <motion.button
                      key={reply}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => sendMessage(reply)}
                      style={{
                        background: "#fff", border: "1px solid rgba(28,28,28,0.1)",
                        borderRadius: 12, padding: "8px 14px", fontSize: 13,
                        color: "#1C1C1C", cursor: "pointer", textAlign: "left",
                        fontFamily: "inherit", fontWeight: 500,
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#DD0C29";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(221,12,41,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(28,28,28,0.1)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                      }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} style={{
              padding: 12, borderTop: "1px solid rgba(0,0,0,0.06)",
              backgroundColor: "#fff", display: "flex", gap: 8, alignItems: "flex-end",
            }}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                rows={1}
                disabled={isTyping}
                style={{
                  flex: 1, resize: "none", border: "1px solid rgba(28,28,28,0.1)",
                  borderRadius: 12, padding: "10px 14px", fontSize: 14,
                  fontFamily: "inherit", outline: "none", lineHeight: 1.4,
                  backgroundColor: "#F6F4F0", color: "#1C1C1C",
                  minHeight: 42, maxHeight: 100,
                  opacity: isTyping ? 0.6 : 1,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#DD0C29")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.1)")}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  backgroundColor: input.trim() && !isTyping ? "#DD0C29" : "rgba(28,28,28,0.08)",
                  color: input.trim() && !isTyping ? "#fff" : "#969696",
                  border: "none", cursor: input.trim() && !isTyping ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background-color 0.2s, color 0.2s",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}