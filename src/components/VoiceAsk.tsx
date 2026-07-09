import { useState, useRef, useEffect } from "react";
import { Mic, X, Send, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const quickQuestions = [
  "Explain photosynthesis simply",
  "Quiz me on World War II",
  "Help me solve 2x + 5 = 15",
  "What should I study next?",
];

export function VoiceAsk() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function handleAsk(question?: string) {
    const query = question || text;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setText("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "That's a great question. Here's a simple explanation tailored to your learning level...",
        },
      ]);
    }, 800);
  }

  function toggleListening() {
    setIsListening((v) => !v);
    setTimeout(() => setIsListening(false), 2500);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="ask-fab fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-coral-dark"
        aria-label="Ask AI tutor"
      >
        <Mic className="h-6 w-6" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-display">
              <Sparkles className="h-5 w-5 text-primary" />
              Ask the AI Tutor
            </DialogTitle>
          </DialogHeader>

          <div className="max-h-64 space-y-3 overflow-y-auto rounded-lg bg-muted p-4">
            {messages.length === 0 && (
              <p className="text-sm text-muted-foreground">Type or speak your question. The AI tutor adapts explanations to your level.</p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`rounded-lg px-3 py-2 text-sm ${
                  m.role === "user" ? "ml-auto w-fit max-w-[80%] bg-primary text-primary-foreground" : "w-fit max-w-[90%] bg-card"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleAsk(q)}
                className="rounded-lg border border-border bg-card px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleListening}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isListening ? "bg-destructive text-destructive-foreground" : "bg-muted text-foreground hover:bg-border"
              }`}
              aria-label={isListening ? "Stop listening" : "Start listening"}
            >
              <Mic className="h-4 w-4" />
            </button>
            <input
              ref={inputRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              placeholder="Ask anything..."
              className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={() => handleAsk()}
              disabled={!text.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-coral-dark disabled:opacity-50"
              aria-label="Send question"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
