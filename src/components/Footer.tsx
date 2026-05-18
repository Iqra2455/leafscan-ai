import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                LeafGuard <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Protecting harvests with computer vision. Built for farmers, free to use.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="#upload" className="text-muted-foreground transition-smooth hover:text-foreground">Detect</a>
            <a href="#features" className="text-muted-foreground transition-smooth hover:text-foreground">Features</a>
            <a href="#how" className="text-muted-foreground transition-smooth hover:text-foreground">How it works</a>
            <a href="#" className="text-muted-foreground transition-smooth hover:text-foreground">Contact</a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LeafGuard AI · Cultivating healthier harvests.
        </div>
      </div>
    </footer>
  );
}
