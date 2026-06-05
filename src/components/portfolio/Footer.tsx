export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mathesh K. Crafted with React + Tailwind.</p>
        <p>Built with care in Trichy, India.</p>
      </div>
    </footer>
  );
}
