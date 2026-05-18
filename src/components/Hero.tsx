import heroLeaf from "@/assets/hero-leaf.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32 md:items-center">
        <div className="animate-fade-up space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Powered by deep learning vision models
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Detect crop diseases in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">seconds</span>
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Snap a photo of any leaf — our AI identifies the disease, scores severity,
            and recommends treatment. Built for farmers, simple for everyone.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#upload"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5"
            >
              Upload a leaf <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary"
            >
              Learn more
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6 text-xs text-muted-foreground">
            <div><span className="font-bold text-foreground">98%</span> accuracy</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="font-bold text-foreground">50+</span> diseases</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="font-bold text-foreground">&lt;2s</span> response</div>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-glow">
            <img src={heroLeaf} alt="Healthy green crop leaf" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
          <div className="glass absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 shadow-card">
            <div className="text-xs text-muted-foreground">Last scan</div>
            <div className="font-display text-sm font-bold text-foreground">Healthy · 99%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
