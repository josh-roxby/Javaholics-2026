import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Store — Javaholics" };

export default function StorePage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <PageHero
        current="Store"
        eyebrow="Store"
        title={
          <>
            Bags, merch,{" "}
            <span style={{ fontStyle: "italic", color: "var(--crema)" }}>and a bit of art.</span>
          </>
        }
        lede="The shop is coming soon. For now, grab a bag on your next visit, or drop us a note and we'll post it."
      />

      <section style={{ padding: "120px 48px", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="jv-mono jv-caps"
            style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 14 }}
          >
            In the works
          </div>
          <p
            style={{
              fontFamily: '"Fraunces", serif',
              fontStyle: "italic",
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 760,
              color: "var(--ink)",
            }}
          >
            250g bags of every origin on the bar, the t-shirt everyone keeps asking for, prints
            from local artists, and a very small run of Javaholics mugs.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
