import { Zap, Target, Sprout, ScanLine, Cloud, HeartHandshake } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning fast", desc: "Get results in under 2 seconds. No waiting, no friction." },
  { icon: Target, title: "Highly accurate", desc: "Trained on 100K+ leaf images across 50+ diseases." },
  { icon: Sprout, title: "Farmer-friendly", desc: "Plain-language treatment steps anyone can follow." },
  { icon: ScanLine, title: "Smart scanning", desc: "Detects severity, not just disease — so you act in time." },
  { icon: Cloud, title: "Works anywhere", desc: "Mobile-ready. Snap and diagnose right from the field." },
  { icon: HeartHandshake, title: "Free to try", desc: "Built to help farmers first. No signup needed to start." },
];

export function Features() {
  return (
    <section id="features" className="bg-gradient-hero py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            Why LeafGuard
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Built for the field
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to protect your crop — nothing you don't.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", title: "Upload", desc: "Snap or drop a clear image of a leaf." },
    { n: "02", title: "Analyze", desc: "AI scans for disease patterns and severity." },
    { n: "03", title: "Act", desc: "Follow tailored treatment recommendations." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div className="font-display text-6xl font-bold text-primary/20">{s.n}</div>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
