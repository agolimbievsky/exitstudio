export default function Footer() {
  return (
    <footer className="border-t border-warm-black/10 bg-cream-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-12">
        <a href="/" className="font-serif text-lg font-semibold tracking-tight text-warm-black hover:text-warm-black/70 transition-colors">
          ExitStudio
        </a>
        <span className="font-sans text-sm text-muted-light">
          &copy; {new Date().getFullYear()} ExitStudio. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
