import { Github, Linkedin, Mail, ArrowRight, Sparkles, Download } from "lucide-react";
import profilePhoto from "@/assets/mathesh-profile.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      {/* Subtle modern background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-foreground" />
            Available for internships & junior roles
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
            Hi, I'm <br/><span className="text-foreground">Mathesh K</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-lg leading-relaxed">
            Front-End Web Developer crafting clean, responsive interfaces with React, JavaScript,
            and modern CSS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg leading-relaxed">
            BCA student at St. Joseph's College, Trichy. Ex-intern at Codebind Technologies. I love
            turning ideas into delightful web experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-all duration-300"
            >
              Get in touch
            </a>
            <a
              href="/Mathesh_CV.pdf"
              download="Mathesh_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-all duration-300"
            >
              Download CV <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <SocialLink href="https://github.com/mathessz2006" icon={<Github className="h-4 w-4" />} ariaLabel="GitHub" />
            <SocialLink href="https://linkedin.com/in/mathesh-k-dev" icon={<Linkedin className="h-4 w-4" />} ariaLabel="LinkedIn" />
            <SocialLink href="mailto:mathessz2006@gmail.com" icon={<Mail className="h-4 w-4" />} ariaLabel="Email" />
          </div>
        </div>

        {/* Avatar */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-border/50 bg-muted/20 shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
            <img 
              src={profilePhoto} 
              alt="Mathesh K" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card border border-border px-5 py-4 shadow-card backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-1">
              Currently
            </div>
            <div className="text-sm font-semibold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, ariaLabel }: { href: string, icon: React.ReactNode, ariaLabel: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="h-11 w-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:bg-muted transition-all duration-300"
    >
      {icon}
    </a>
  );
}
