import { Bell, Calendar, CheckCircle2, ChevronRight, Heart, Trophy } from "lucide-react";

const children = [
  {
    name: "Alex Johnson",
    subject: "Mathematics",
    progress: 78,
    streak: 12,
    next: "Physics Quiz tomorrow",
    highlight: "Mastered quadratic equations",
  },
  {
    name: "Mia Johnson",
    subject: "Biology",
    progress: 64,
    streak: 5,
    next: "Cell structure revision",
    highlight: "Improved 18% this month",
  },
];

export function ParentPanel() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="card-soft rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">Family Learning Hub</h3>
            <p className="text-sm text-muted-foreground">Stay connected with your children's progress</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {children.map((child) => (
            <div key={child.name} className="rounded-xl border border-border bg-background p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold">{child.name}</p>
                  <p className="text-sm text-muted-foreground">{child.subject}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/20 text-mint-dark">
                  <Trophy className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall progress</span>
                  <span className="font-semibold">{child.progress}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${child.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {child.next}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-mint" />
                  {child.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl bg-muted p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Weekly digest</p>
              <p className="text-xs text-muted-foreground">Get a summary every Sunday at 6 PM.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Configure <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
