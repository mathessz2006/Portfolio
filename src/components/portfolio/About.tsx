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
    <section id="about" className="py-32 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About me" title="A motivated front-end developer in the making" />

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
            <p>
              I'm a motivated BCA student with hands-on front-end web development experience,
              including a professional internship at{" "}
              <span className="font-semibold text-foreground">Codebind Technologies</span>. I'm
              passionate about creating clean, user-friendly interfaces and eager to contribute as a
              junior developer.
            </p>
            <p>
              I thrive on taking new challenges and transforming ideas into functional, responsive
              web applications using HTML, CSS, JavaScript and React.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
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

          <div className="grid sm:grid-cols-2 gap-5">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md hover:border-border transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-muted/50 text-foreground grid place-items-center mb-5 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
    <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
      <div className="flex items-center gap-3 text-foreground">
        <div className="p-2 rounded-lg bg-muted text-foreground">
          {icon}
        </div>
        <span className="font-semibold text-base">{title}</span>
      </div>
      <div className="mt-4 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
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
      <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">
        <span className="h-px w-8 bg-muted-foreground/30" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
    </div>
  );
}
