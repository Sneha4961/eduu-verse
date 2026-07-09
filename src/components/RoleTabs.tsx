import { useState } from "react";
import { StudentDashboard } from "./StudentDashboard";
import { TeacherPanel } from "./TeacherPanel";
import { ParentPanel } from "./ParentPanel";

const roles = [
  { id: "student", label: "Student" },
  { id: "teacher", label: "Teacher" },
  { id: "parent", label: "Parent" },
] as const;

type RoleId = (typeof roles)[number]["id"];

export function RoleTabs() {
  const [active, setActive] = useState<RoleId>("student");
  const [animationKey, setAnimationKey] = useState(0);

  function handleRoleChange(role: RoleId) {
    if (role === active) return;
    setActive(role);
    setAnimationKey((k) => k + 1);
  }

  return (
    <section id="roles" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One platform, built for every role
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            EduVerse adapts its interface, insights, and tools depending on who is learning, teaching, or supporting.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleChange(role.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                active === role.id ? "tab-active shadow-md" : "tab-inactive"
              }`}
              aria-pressed={active === role.id}
            >
              {role.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div key={animationKey} className="animate-fade-in">
            {active === "student" && (
              <div className="mx-auto max-w-3xl">
                <StudentDashboard />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Students get adaptive lessons, progress tracking, and an AI tutor that explains concepts their way.
                </p>
              </div>
            )}
            {active === "teacher" && <TeacherPanel />}
            {active === "parent" && <ParentPanel />}
          </div>
        </div>
      </div>
    </section>
  );
}
