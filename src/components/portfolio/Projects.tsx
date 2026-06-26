import { ExternalLink, Github, Cake, GraduationCap, Briefcase, Calculator } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "Birthday Reminder WebApp",
    type: "Self Project",
    description:
      "Full-stack web app with Firebase auth, Firestore database, and Email/SMS reminders with 1–30 days advanced scheduling. Dashboard with search, filter, sort and upcoming birthday views.",
    tech: ["React.js", "Firebase", "Firestore", "GitHub Pages"],
    live: "https://birthday-app-beryl.vercel.app/",
    repo: "https://github.com/mathessz2006",
    icon: Cake,
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
  },
  {
    title: "AI job Tracker",
    type: "Self Project",
    description:
      "Full-stack web app with Firebase auth, Firestore database, and Email/SMS reminders with 1–30 days advanced scheduling. Dashboard with search, filter, sort and upcoming birthday views.",
    tech: ["React.js", "Firebase", "Firestore", "GitHub Pages"],
    live: "https://mathessz2006.github.io/birthday-remind/",
    repo: "https://github.com/mathessz2006",
    icon: Briefcase,
  },
  {
    title: "Smart split Bill + calculator",
    type: "Self Project",
    description: "Smart Split Bill + Tip Calculator is a clean, mobile-friendly web tool that helps users quickly split bills, add tip, and calculate each person’s share with instant, accurate results. It was built to make shared expenses easier, faster, and less error-prone for everyday use.",
    tech: ["React.js", "Html","css", "Typescript", "GitHub Pages"],
    live: "https://portfolio-iota-amber-37.vercel.app/",
    repo: "https://github.com/mathessz2006/smart-split-calculator.git",
    icon: Calculator,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Projects" title="Featured work I've built" />
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className="group flex flex-col rounded-3xl border border-border/50 bg-card/20 overflow-hidden hover:bg-card/40 transition-colors duration-500"
            >
              <div
                className="relative h-48 bg-muted/30 grid place-items-center group-hover:bg-muted/50 transition-colors duration-500"
              >
                <p.icon className="h-14 w-14 text-foreground/40 group-hover:scale-110 group-hover:text-foreground/80 transition-all duration-500" />
                <span className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-background/80 backdrop-blur-md px-3 py-1.5 border border-border/50 text-muted-foreground">
                  {p.type}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-semibold text-2xl tracking-tight text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium rounded-full bg-muted/50 text-foreground/80 px-3 py-1 border border-border/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-all duration-300 w-full sm:w-auto"
                    >
                      Live demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-all duration-300 w-full sm:w-auto"
                  >
                    <Github className="h-4 w-4" /> Source
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
