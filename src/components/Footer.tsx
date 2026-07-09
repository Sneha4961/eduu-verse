import { Github, Globe, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-bold">EduVerse</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-powered personalized learning for students, teachers, and parents.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#roles" className="hover:text-foreground">Roles</a></li>
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#voice" className="hover:text-foreground">AI Tutor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Competition</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Frontend Battle 2026</li>
              <li>Education & Learning Theme</li>
              <li>Built with React & Tailwind</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Connect</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Globe className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EduVerse. Built for Frontend Battle 2026.
        </div>
      </div>
    </footer>
  );
}
