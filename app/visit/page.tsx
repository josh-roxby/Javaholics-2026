import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionVisit } from "@/components/sections/visit";

export const metadata = { title: "Visit — Javaholics" };

export default function VisitPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <PageHero
        current="Visit"
        eyebrow="Visit"
        title={
          <>
            Come over. <br />
            <span style={{ fontStyle: "italic", color: "var(--crema)" }}>Stay a while.</span>
          </>
        }
        lede="Fairview Strand, Dublin 3. Across from the park. Open every day."
      />
      <SectionVisit />
      <Footer />
    </main>
  );
}
