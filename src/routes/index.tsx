import { createFileRoute } from "@tanstack/react-router";
import { EduHeader } from "@/components/EduHeader";
import { Hero } from "@/components/Hero";
import { RoleTabs } from "@/components/RoleTabs";
import { Features } from "@/components/Features";
import { DemoCTA } from "@/components/DemoCTA";
import { Footer } from "@/components/Footer";
import { VoiceAsk } from "@/components/VoiceAsk";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <EduHeader />
      <main>
        <Hero />
        <RoleTabs />
        <section id="voice" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ask anything. Learn everything.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The floating AI tutor button gives every learner instant help. Tap it, type or speak, and get explanations that match your level.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
              Try the mic button in the bottom-right corner.
            </div>
          </div>
        </section>
        <Features />
        <DemoCTA />
      </main>
      <Footer />
      <VoiceAsk />
    </div>
  );
}
