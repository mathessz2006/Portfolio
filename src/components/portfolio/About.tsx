import { GraduationCap, Briefcase, Zap, Users, Lightbulb, Wrench } from "lucide-react";

const strengths = [
  {
    icon: Zap,
    title: "Quick Learner",
    desc: "Fast adaptation to new technologies and frameworks.",
  },
  { icon: Wrench, title: "Adaptable", desc: "Flexible approach to varied project requirements." },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "Analytical mindset for debugging & optimization.",
  },
  { icon: Users, title: "Team Player", desc: "Collaborative work style with dev teams." },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About me" title="A motivated front-end developer in the making" />

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              I'm a motivated BCA student with hands-on front-end web development experience,
              including a professional internship at{" "}
              <span className="font-medium text-foreground">Codebind Technologies</span>. I'm
              passionate about creating clean, user-friendly interfaces and eager to contribute as a
              junior developer.
            </p>
            <p>
              I thrive on taking new challenges and transforming ideas into functional, responsive
              web applications using HTML, CSS, JavaScript and React.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <InfoCard
                icon={<GraduationCap className="h-5 w-5" />}
                title="Education"
                lines={[
                  "Bachelor of Computer Applications",
                  "St. Joseph's College (Autonomous)",
                  "Trichy – Expected 2026",
                ]}
              />
              <InfoCard
                icon={<Briefcase className="h-5 w-5" />}
                title="Experience"
                lines={["Web Development Intern", "Codebind Technologies", "May 2025 – Jun 2025"]}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="font-semibold text-foreground">{title}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground space-y-0.5">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-semibold">
        <span className="h-px w-6 bg-primary/60" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
