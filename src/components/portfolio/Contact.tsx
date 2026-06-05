import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./About";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />

        <div className="mt-12 grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-3">
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="mathessz2006@gmail.com"
              href="mailto:mathessz2006@gmail.com"
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value="+91 86104 81578"
              href="tel:+918610481578"
            />
            <ContactItem
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="mathesh-k-dev"
              href="https://linkedin.com/in/mathesh-k-dev"
            />
            <ContactItem
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="mathessz2006"
              href="https://github.com/mathessz2006"
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value="Trichy, Tamil Nadu, India"
            />
          </div>

          <form
            className="md:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-card space-y-4"
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
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project or opportunity..."
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-soft hover:opacity-95 transition"
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
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition">
      <div className="h-9 w-9 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {Inner}
    </a>
  ) : (
    Inner
  );
}
