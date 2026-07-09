import { ArrowRight, Play, Sparkles } from "lucide-react";
import { StudentDashboard } from "./StudentDashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8 gradient-hero">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Frontend Battle 2026 Submission
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learning that adapts to <span className="text-primary">every mind</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              EduVerse is an AI-powered personalized learning platform built for students, teachers, and parents. It turns passive studying into an interactive journey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-coral-dark hover:shadow-lg"
              >
                Explore the Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted">
                <Play className="h-4 w-4 fill-current" />
                Watch the Pitch
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-mint" />
                Personalized Paths
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                AI Tutor
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-navy" />
                Real-time Progress
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative card-soft rounded-2xl p-2">
              <StudentDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
