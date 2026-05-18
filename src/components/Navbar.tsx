import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3 shadow-soft">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            LeafGuard <span className="text-primary">AI</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#upload" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            Detect
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            Features
          </a>
          <a href="#how" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            How it works
          </a>
        </nav>
        <a
          href="#upload"
          className="rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-glow hover:-translate-y-0.5"
        >
          Try free
        </a>
      </div>
    </header>
  );
}
