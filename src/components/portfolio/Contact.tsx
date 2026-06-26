import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./About";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />

        <div className="mt-16 grid md:grid-cols-5 gap-10 lg:gap-16">
          <div className="md:col-span-2 space-y-4">
            <ContactItem
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="mathessz2006@gmail.com"
              href="mailto:mathessz2006@gmail.com"
            />
            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value="+91 86104 81578"
              href="tel:+918610481578"
            />
            <ContactItem
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
              value="mathesh-k-dev"
              href="https://linkedin.com/in/mathesh-k-dev"
            />
            <ContactItem
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
              value="mathessz2006"
              href="https://github.com/mathessz2006"
            />
            <ContactItem
              icon={<MapPin className="h-5 w-5" />}
              label="Location"
              value="Trichy, Tamil Nadu, India"
            />
          </div>

          <form
            className="md:col-span-3 rounded-3xl border border-border/50 bg-card/20 p-8 sm:p-10 transition-colors duration-300 hover:bg-card/40 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
              const body = encodeURIComponent(
                `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
              );
              window.location.href = `mailto:mathessz2006@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email address" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-2 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project or opportunity..."
                className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm w-full sm:w-auto"
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80 mb-2 block">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all"
      />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card/20 p-4 transition-all duration-300 hover:bg-card/60 hover:border-border hover:-translate-y-1">
      <div className="h-12 w-12 rounded-xl bg-muted/50 text-foreground flex items-center justify-center transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">{label}</div>
        <div className="text-sm font-medium text-foreground mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {Inner}
    </a>
  ) : (
    Inner
  );
}
