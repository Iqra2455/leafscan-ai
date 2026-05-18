import { useState, useRef, useCallback } from "react";
import { Upload, ImageIcon, Loader2, Sparkles, X, Activity, ShieldCheck, Leaf as LeafIcon } from "lucide-react";

type Severity = "Low" | "Moderate" | "High";
type Result = {
  disease: string;
  confidence: number;
  severity: Severity;
  treatment: string;
};

const MOCK_RESULTS: Result[] = [
  {
    disease: "Tomato Late Blight",
    confidence: 94,
    severity: "High",
    treatment:
      "Remove infected leaves immediately. Apply copper-based fungicide every 7 days. Improve air circulation and avoid overhead watering.",
  },
  {
    disease: "Powdery Mildew",
    confidence: 88,
    severity: "Moderate",
    treatment:
      "Spray a mix of 1 tsp baking soda per liter of water. Prune affected areas. Ensure adequate sunlight and ventilation.",
  },
  {
    disease: "Healthy Leaf",
    confidence: 99,
    severity: "Low",
    treatment:
      "No action needed. Continue regular watering, balanced fertilization, and routine inspection to maintain crop health.",
  },
  {
    disease: "Leaf Rust",
    confidence: 91,
    severity: "Moderate",
    treatment:
      "Apply sulfur or neem-based fungicide. Remove fallen debris around the base. Rotate crops next season.",
  },
];

const severityStyles: Record<Severity, string> = {
  Low: "bg-success/15 text-success border-success/30",
  Moderate: "bg-warning/15 text-warning border-warning/30",
  High: "bg-destructive/15 text-destructive border-destructive/30",
};

export function UploadSection() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    setResult(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const analyze = () => {
    if (!preview) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(MOCK_RESULTS[Math.floor(Math.random() * MOCK_RESULTS.length)]);
      setLoading(false);
    }, 2400);
  };

  const reset = () => {
    setPreview(null);
    setFileName("");
    setResult(null);
  };

  return (
    <section id="upload" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
          Upload a leaf, get an instant diagnosis
        </h2>
        <p className="mt-4 text-muted-foreground">
          Drop a clear photo of your crop leaf. Our model handles the rest.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Upload card */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleFile(file);
              }}
              onClick={() => !preview && inputRef.current?.click()}
              className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-smooth ${
                dragging ? "border-primary bg-primary/5" : "border-border bg-secondary/40"
              } ${!preview ? "cursor-pointer hover:border-primary hover:bg-primary/5" : ""}`}
            >
              {preview ? (
                <div className="relative">
                  <img src={preview} alt="Leaf preview" className="h-[400px] w-full object-contain bg-secondary/30" />
                  {loading && (
                    <div className="absolute inset-0 overflow-hidden bg-foreground/10 backdrop-blur-sm">
                      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow animate-scan" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="glass rounded-2xl px-5 py-3 shadow-card">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <Loader2 className="h-4 w-4 animate-spin text-primary" />
                            Scanning leaf...
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={reset}
                    className="absolute right-3 top-3 rounded-full bg-card/90 p-2 shadow-soft backdrop-blur transition-smooth hover:bg-card"
                  >
                    <X className="h-4 w-4 text-foreground" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <Upload className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Drop leaf image here
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    or click to browse — JPG, PNG up to 10MB
                  </p>
                </div>
              )}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
            </div>

            {preview && (
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                  <ImageIcon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{fileName}</span>
                </div>
                <button
                  onClick={analyze}
                  disabled={loading}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  {loading ? "Analyzing..." : "Analyze leaf"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Result card */}
        <div className="lg:col-span-2">
          <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-foreground">Diagnosis</h3>
              <Activity className="h-5 w-5 text-primary" />
            </div>

            {!result && !loading && (
              <div className="flex h-[340px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                  <LeafIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload a leaf to see <br /> prediction and treatment
                </p>
              </div>
            )}

            {loading && (
              <div className="flex h-[340px] flex-col items-center justify-center gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Running AI inference...</p>
              </div>
            )}

            {result && (
              <div className="animate-fade-up space-y-5">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Detected</div>
                  <div className="mt-1 font-display text-2xl font-bold text-foreground">{result.disease}</div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-medium text-muted-foreground">Confidence</span>
                    <span className="font-bold text-foreground">{result.confidence}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-4 py-3">
                  <span className="text-sm font-medium text-muted-foreground">Severity</span>
                  <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${severityStyles[result.severity]}`}>
                    {result.severity}
                  </span>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Suggested treatment
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{result.treatment}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
