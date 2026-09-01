"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Mic, MicOff } from "lucide-react";
import { img } from "@/lib/asset";

const AVATAR = img("/images/mac-brown-seminars-portrait.webp");
const LOGO  = img("/chat-logo-mbff.webp");

type Message = { role: "user" | "assistant"; content: string };

function renderContent(text: string) {
  const PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]*)\)|\*\*([^*]+)\*\*/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    if (match[1] !== undefined) {
      const href = match[2];
      const isExternal = href.startsWith("http");
      nodes.push(
        <a key={key++} href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="underline font-medium text-primary hover:opacity-80">
          {match[1]}
        </a>
      );
    } else {
      nodes.push(<strong key={key++}>{match[3]}</strong>);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }
  return nodes;
}

const WELCOME = "Hi! I can help you find the right trip or school, answer questions about what to expect, or point you toward booking. What are you looking to do?";
const MAX_QUESTIONS = 5;

function getTodayKey() {
  return "chat_q_" + new Date().toISOString().slice(0, 10);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [questionsUsed, setQuestionsUsed] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(getTodayKey()) || "0", 10);
    setQuestionsUsed(stored);
  }, []);

  useEffect(() => {
    // Check for Web Speech API support (not available in Firefox)
    const SR = (window as typeof window & { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown })
      .SpeechRecognition ?? (window as typeof window & { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;
    setVoiceSupported(!!SR);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 100);
    }
  }, [open, messages]);

  // Clean up recognition on unmount
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  function toggleMic() {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognition = new SR() as any;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (e: { results: { [key: number]: { [key: number]: { transcript: string } } } }) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setListening(false);
      // Small delay so user sees the transcript before it sends
      setTimeout(() => {
        sendText(transcript);
      }, 300);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognition.start();
  }

  async function sendText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    if (questionsUsed >= MAX_QUESTIONS) return;
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    const newCount = questionsUsed + 1;
    setQuestionsUsed(newCount);
    localStorage.setItem(getTodayKey(), String(newCount));
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message || data.error || "Sorry, something went wrong." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Sorry, I couldn't connect. Please try again or call (828) 736-1469." }]);
    } finally {
      setLoading(false);
    }
  }

  function send() {
    sendText(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[340px] sm:w-[380px] bg-background border border-border shadow-2xl flex flex-col overflow-hidden"
          style={{ height: "480px" }}>
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center shrink-0">
            <img src={AVATAR} alt="Mac Brown" className="w-9 h-9 rounded-full object-cover object-top shrink-0 border-2 border-primary-foreground/30" />
            <div className="flex-1 flex flex-col items-center">
              <img src={LOGO} alt="Mac Brown Fly Fish" className="h-10 w-auto" />
              <p className="text-xs text-primary-foreground/70 mt-0.5">Ask us anything about trips & schools</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors shrink-0">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <img src={AVATAR} alt="Mac" className="w-6 h-6 rounded-full object-cover object-top shrink-0 mb-0.5" />
                )}
                <div className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground [&_a]:text-primary [&_a]:underline [&_a]:font-medium [&_a:hover]:opacity-80"
                }`}>
                  {msg.role === "assistant" ? renderContent(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <img src={AVATAR} alt="Mac" className="w-6 h-6 rounded-full object-cover object-top shrink-0 mb-0.5" />
                <div className="bg-muted px-3 py-2 flex items-center gap-2 text-muted-foreground">
                  <Loader2 size={14} className="animate-spin" />
                  <span className="text-xs">Thinking…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="shrink-0 border-t border-border px-3 py-2 flex items-center gap-2">
            {questionsUsed >= MAX_QUESTIONS ? (
              <p className="flex-1 text-xs text-muted-foreground text-center py-1">
                You&apos;ve reached today&apos;s limit. Call us at{" "}
                <a href="tel:8287361469" className="text-primary underline">(828) 736-1469</a> or{" "}
                <a href="/book" className="text-primary underline">book online</a>.
              </p>
            ) : (
              <>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                  placeholder={listening ? "Listening…" : "Ask a question…"}
                  className="flex-1 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none py-1"
                  disabled={loading || listening}
                />
                {voiceSupported && (
                  <button
                    onClick={toggleMic}
                    disabled={loading}
                    className={`transition-colors ${
                      listening
                        ? "text-red-500 animate-pulse"
                        : "text-muted-foreground hover:text-primary"
                    } disabled:opacity-40`}
                    aria-label={listening ? "Stop listening" : "Speak your question"}
                    title={listening ? "Tap to stop" : "Tap to speak"}
                  >
                    {listening ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>
                )}
                <button
                  onClick={send}
                  disabled={!input.trim() || loading || listening}
                  className="text-primary disabled:text-muted-foreground/40 hover:text-primary/80 transition-colors"
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="shadow-lg hover:opacity-90 transition-all duration-200 rounded-full overflow-hidden border-2 border-primary"
        style={{ width: 52, height: 52 }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open
          ? <div className="w-full h-full bg-primary flex items-center justify-center"><X size={20} className="text-primary-foreground" /></div>
          : <img src={AVATAR} alt="Chat with Mac" className="w-full h-full object-cover object-top" />
        }
      </button>
    </div>
  );
}
