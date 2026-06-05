import { ExternalLink, Github, Cake, GraduationCap } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "Birthday Reminder WebApp",
    type: "Self Project",
    description:
      "Full-stack web app with Firebase auth, Firestore database, and Email/SMS reminders with 1–30 days advanced scheduling. Dashboard with search, filter, sort and upcoming birthday views.",
    tech: ["React.js", "Firebase", "Firestore", "GitHub Pages"],
    live: "https://mathessz2006.github.io/birthday-remind/",
    repo: "https://github.com/mathessz2006",
    icon: Cake,
    gradient: "from-pink-500/20 via-rose-400/10 to-orange-300/20",
  },
  {
    title: "E-Learning Management System",
    type: "College Project",
    description:
      "Web platform supporting online education where admins, instructors, and students manage courses, learning materials and assessments in a centralized environment.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    live: "",
    repo: "https://github.com/mathessz2006",
    icon: GraduationCap,
    gradient: "from-indigo-500/20 via-blue-400/10 to-cyan-300/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Projects" title="Featured work I've built" />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-soft transition"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${p.gradient} grid place-items-center`}
              >
                <p.icon className="h-16 w-16 text-foreground/70" />
                <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-card/80 backdrop-blur px-2.5 py-1 border border-border">
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-full bg-secondary text-secondary-foreground px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Live demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
