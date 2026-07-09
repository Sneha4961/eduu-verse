import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function EduHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">EduVerse</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#roles" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Roles
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#voice" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            AI Tutor
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coral-dark"
          >
            Try Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
