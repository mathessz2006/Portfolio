import { SectionHeading } from "./About";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend & DB",
    items: [
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "MongoDB", level: 65 },
      { name: "Python", level: 65 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Firebase", level: 70 },
      { name: "Responsive Design", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-semibold text-lg">{g.title}</h3>
              <div className="mt-5 space-y-4">
                {g.items.map((it) => (
                  <div key={it.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/85">{it.name}</span>
                      <span className="text-muted-foreground">{it.level}%</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-primary"
                        style={{ width: `${it.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
