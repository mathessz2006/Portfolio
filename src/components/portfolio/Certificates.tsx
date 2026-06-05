import { Award, BadgeCheck, Code2, Keyboard, Trophy } from "lucide-react";
import { SectionHeading } from "./About";

const certs = [
  {
    icon: BadgeCheck,
    title: "Web Development Internship",
    issuer: "Codebind Technologies",
    year: "2025",
  },
  {
    icon: Code2,
    title: "JavaScript Fundamentals",
    issuer: "Online Certification",
    year: "2024",
  },
  {
    icon: Code2,
    title: "Python Programming",
    issuer: "Online Certification",
    year: "2024",
  },
  {
    icon: Keyboard,
    title: "Junior Grade English Typewriting",
    issuer: "First Class with Distinction",
    year: "2022",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    issuer: "Full-Stack Web Suite at VDart",
    year: "2024",
  },
  {
    icon: Award,
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2024",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certifications" title="Recognitions & achievements" />
        <p className="mt-3 text-sm text-muted-foreground">
          Tip: replace each card's icon block with your certificate image when ready.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition"
            >
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent grid place-items-center border border-border">
                <c.icon className="h-12 w-12 text-primary" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.issuer}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">{c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
