import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UploadSection } from "@/components/UploadSection";
import { Features, HowItWorks } from "@/components/Features";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LeafGuard AI — Instant Crop Disease Detection" },
      {
        name: "description",
        content:
          "Upload a leaf photo and get instant AI-powered crop disease detection, severity scoring, and treatment recommendations.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <UploadSection />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
