import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/mathesh-profile.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-20 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary-glow/25 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-card">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for internships & junior roles
          </span>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Mathesh K</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Front-End Web Developer crafting clean, responsive interfaces with React, JavaScript,
            and modern CSS.
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-lg">
            BCA student at St. Joseph's College, Trichy. Ex-intern at Codebind Technologies. I love
            turning ideas into delightful web experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-soft hover:opacity-95 transition"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-accent transition"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/mathessz2006"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 rounded-full border border-border bg-card grid place-items-center hover:bg-accent transition"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/mathesh-k-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full border border-border bg-card grid place-items-center hover:bg-accent transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:mathessz2006@gmail.com"
              aria-label="Email"
              className="h-10 w-10 rounded-full border border-border bg-card grid place-items-center hover:bg-accent transition"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative mx-auto">
          <div className="absolute inset-0 -m-6 rounded-full bg-gradient-primary blur-2xl opacity-40 animate-float" />
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full p-1 bg-gradient-primary shadow-glow">
            <div className="h-full w-full rounded-full bg-card overflow-hidden">
              <img src={profilePhoto} alt="Mathesh K" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-card">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Currently
            </div>
            <div className="text-sm font-semibold">BCA · Final Year</div>
          </div>
        </div>
      </div>
    </section>
  );
}
