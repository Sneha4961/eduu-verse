import { BarChart3, Users, FileText, MessageSquare, TrendingUp, AlertCircle } from "lucide-react";

const metrics = [
  { label: "Active students", value: "128", change: "+12%", icon: Users },
  { label: "Assignments graded", value: "84", change: "AI-assisted", icon: FileText },
  { label: "Class avg", value: "87%", change: "+5%", icon: BarChart3 },
];

const insights = [
  { name: "Emma R.", status: "Excelling", note: "Ready for advanced calculus module" },
  { name: "Liam K.", status: "Needs help", note: "Struggling with trigonometry proofs" },
  { name: "Sophia M.", status: "On track", note: "Consistent participation this week" },
];

export function TeacherPanel() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 card-soft rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">Classroom Command Center</h3>
            <p className="text-sm text-muted-foreground">Grade 10 Mathematics • Period 3</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <BarChart3 className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-muted p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <m.icon className="h-4 w-4" />
                <p className="text-xs font-medium">{m.label}</p>
              </div>
              <p className="mt-2 font-display text-2xl font-bold">{m.value}</p>
              <p className="mt-1 text-xs text-mint">{m.change}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold">Student Insights</p>
          <div className="mt-3 space-y-3">
            {insights.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.note}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    s.status === "Excelling"
                      ? "bg-mint/20 text-mint-dark"
                      : s.status === "Needs help"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-primary/10 text-primary"
                  }`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-soft rounded-2xl p-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">AI Teaching Assistant</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Generate quiz questions, summarize student progress, and get intervention suggestions.
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg bg-muted p-3 text-sm">
            <p className="font-medium">Suggested action</p>
            <p className="mt-1 text-xs text-muted-foreground">Send a personalized practice set to Liam focusing on sine/cosine identities.</p>
          </div>
          <div className="rounded-lg bg-muted p-3 text-sm">
            <p className="font-medium">Lesson plan</p>
            <p className="mt-1 text-xs text-muted-foreground">Tomorrow's vectors topic can start with a real-world aviation example.</p>
          </div>
        </div>
        <button className="mt-4 w-full rounded-lg bg-primary py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coral-dark">
          Generate Report
        </button>
      </div>
    </div>
  );
}
