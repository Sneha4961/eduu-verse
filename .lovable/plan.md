Product: EduVerse — an AI-powered personalized learning platform.

Frontend app (deployable preview)
1. Replace the placeholder index with a full landing + app shell.
2. Hero section: value prop, CTA, and featured screenshot/illustration.
3. Role tabs (Student / Teacher / Parent) with a fast fade transition on switch. Use the existing @keyframes fade-in/fade-out tokens in src/styles.css and force a fresh animation trigger on tab change.
4. Role-specific content panels:
   - Student: personalized learning path, progress ring, upcoming lessons, AI tutor chat.
   - Teacher: class overview, assignment analytics, student insights.
   - Parent: child progress summary, activity feed, quick actions.
5. Voice ask feature: floating action button (.ask-fab) with transition-all duration-200 ease, hover lift, and a modal for voice/text questions.
6. Design system: update src/styles.css with an education palette (warm coral + deep navy + mint), semantic tokens, and utility classes. No hardcoded colors in components.
7. Accessibility: focus rings, reduced-motion support, semantic headings.
8. Add routes for About, Features, and Demo if needed, or keep as a single-page landing with sections.
9. Ensure head metadata in src/routes/__root.tsx is updated to a real app title/description.

PDF presentation (2–6 pages)
1. Page 1: Title slide — project name, tagline, team.
2. Page 2: Problem Statement — challenges in modern education, target audience.
3. Page 3: Proposed Solution — EduVerse features, user flow, role panels.
4. Page 4: Tech Stack — React, TanStack Start, Tailwind CSS, shadcn/ui, Framer Motion, etc.
5. Page 5: Prototype — embedded screenshots of the app with live preview and repo links.
6. Page 6: Expected Impact & Future Scope — benefits, real-world applications, upcoming integrations.

Deliverables
- Updated app with a live preview at the project URL.
- PDF saved to /mnt/documents/exports/FrontendBattle2026_EduVerse.pdf.

Questions before I start
- Should I proceed with the name "EduVerse" or do you have a preferred project name?
- Do you want a live preview URL to be included in the PDF, or should I use a placeholder?
- Any team member names to list on the title slide?