export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mathesh K. Crafted with React.</p>
        <p>Built with care in Trichy, India.</p>
      </div>
    </footer>
  );
}
