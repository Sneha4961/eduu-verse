import { ArrowRight } from "lucide-react";

export function DemoCTA() {
  return (
    <section id="demo" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-secondary px-8 py-16 text-center text-secondary-foreground sm:px-16">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to reimagine learning?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          This prototype demonstrates the frontend vision of EduVerse. The full platform would integrate with school data, LMS APIs, and AI providers.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#roles"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-coral-dark"
          >
            Try the Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Sneha4961/eduu-verse"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/30 px-6 py-3 text-base font-semibold transition-colors hover:bg-secondary-foreground/10"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
}
