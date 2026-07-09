import { Brain, CalendarDays, LineChart, MessageCircle, Puzzle, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive AI Tutor",
    description: "Answers questions by voice or text and explains concepts at the student's current level.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: LineChart,
    title: "Progress Intelligence",
    description: "Real-time dashboards show strengths, gaps, and next-best topics for every learner.",
    color: "bg-mint/20 text-mint-dark",
  },
  {
    icon: Puzzle,
    title: "Personalized Paths",
    description: "Curriculum adjusts based on pace, goals, and learning style—visual, auditory, or hands-on.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description: "Suggests study sessions that fit the student's calendar and energy patterns.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "Role-Based Views",
    description: "Students, teachers, and parents each see the tools and insights relevant to them.",
    color: "bg-mint/20 text-mint-dark",
  },
  {
    icon: Shield,
    title: "Safe & Private",
    description: "Built with student privacy in mind. No data sold, no ads, and full parental controls.",
    color: "bg-secondary/10 text-secondary",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Features that make learning stick
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every tool is designed to reduce friction, increase engagement, and give actionable insights.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
