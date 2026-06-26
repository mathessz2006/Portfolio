import { Award, BadgeCheck, Code2, Keyboard, Trophy } from "lucide-react";
import { SectionHeading } from "./About";
import certificateTypewriting from "@/assets/certificate-typewriting.jpeg";
import certificateForage from "@/assets/certificate-forage.jpeg";
import pythonprogrammingcertificate from "@/assets/python.jpeg";
import webdevelopmentinterncertificate from "@/assets/web development.jpeg";
import hackathoncertificate from "@/assets/vdart.jpeg";

const certs = [
  {
    icon: BadgeCheck,
    title: "Web Development Internship",
    issuer: "Codebind Technologies",
    year: "2025",
    photo: webdevelopmentinterncertificate,
  },
  {
    icon: Code2,
    title: "JavaScript",
    issuer: "Online Certification",
    year: "2024",
    photo: pythonprogrammingcertificate,
  },
  {
    icon: Code2,
    title: "Python Programming",
    issuer: "Online Certification",
    year: "2024",
    photo: pythonprogrammingcertificate,
  },
  {
    icon: Keyboard,
    title: "Junior Grade Typewriting English",
    issuer: "Government Technical Examinations, Tamil Nadu",
    detail: "30 Words per Minute — First Class with Distinction",
    year: "2024",
    photo: certificateTypewriting,
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    issuer: "Full-Stack Web Suite at VDart",
    year: "2024",
    photo: hackathoncertificate,
  },
  {
    icon: Award,
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2024",
    photo: certificateForage,
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-32 bg-background border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certifications" title="Recognitions & achievements" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-3xl border border-border/50 bg-card/20 p-6 hover:bg-card/40 hover:border-border transition-all duration-300"
            >
              <div className="aspect-[16/9] rounded-2xl bg-muted/30 grid place-items-center border border-border/30 overflow-hidden mb-6">
                {c.photo ? (
                  <img
                    src={c.photo}
                    alt={`${c.title} certificate`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <c.icon className="h-10 w-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                )}
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-lg leading-snug text-foreground group-hover:text-primary transition-colors">{c.title}</h3>
                  <span className="text-xs font-medium rounded-full bg-muted px-2.5 py-1 text-muted-foreground shrink-0">{c.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{c.issuer}</p>
                {c.detail ? (
                  <p className="text-xs text-muted-foreground/70 mt-auto pt-2">{c.detail}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
