import { BookOpen, CheckCircle2, Clock, Flame, MoreHorizontal, TrendingUp } from "lucide-react";

export function StudentDashboard() {
  return (
    <div className="rounded-xl bg-card p-4 text-card-foreground">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Welcome back</p>
          <h3 className="font-display text-lg font-semibold">Alex's Learning Space</h3>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Flame className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs text-muted-foreground">Weekly goal</p>
          <p className="mt-1 font-display text-2xl font-bold">84%</p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div className="h-full w-[84%] rounded-full bg-primary" />
          </div>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs text-muted-foreground">Streak</p>
          <p className="mt-1 font-display text-2xl font-bold">12 days</p>
          <div className="mt-2 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-1.5 flex-1 rounded-full bg-mint" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-medium text-muted-foreground">Up next</p>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <BookOpen className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Linear Algebra</p>
              <p className="text-xs text-muted-foreground">Matrices • 20 min</p>
            </div>
            <CheckCircle2 className="h-4 w-4 text-mint" />
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary/10 text-secondary">
              <Clock className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Physics Quiz</p>
              <p className="text-xs text-muted-foreground">Kinematics • 15 min</p>
            </div>
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-primary/5 p-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <p className="text-sm font-semibold text-primary">AI Insight</p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">You're strongest in visual problem solving. Try the new diagram exercises.</p>
      </div>
    </div>
  );
}
