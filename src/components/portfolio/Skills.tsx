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
    <section id="skills" className="py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title} className="rounded-3xl border border-border/50 bg-card/20 p-8 hover:bg-card/40 transition-colors duration-300">
              <h3 className="font-semibold text-xl mb-8">{g.title}</h3>
              <div className="space-y-6">
                {g.items.map((it) => (
                  <div key={it.name} className="group">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-foreground/90">{it.name}</span>
                      <span className="text-muted-foreground">{it.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-foreground transform origin-left transition-transform duration-1000 ease-out group-hover:scale-x-105"
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
