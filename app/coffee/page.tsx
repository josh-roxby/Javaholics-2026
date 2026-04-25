import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionCoffee } from "@/components/sections/coffee";
import { MEDIA } from "@/lib/media";

export const metadata = { title: "Coffee — Javaholics" };

export default function CoffeePage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <PageHero
        current="Coffee"
        eyebrow="Coffee"
        title={
          <>
            Beans,{" "}
            <span style={{ fontStyle: "italic", color: "var(--crema)" }}>roasted right here.</span>
          </>
        }
        lede="Single origins from farms we trust, plus our own house blend. Roasted weekly in the back room."
        bgImage={MEDIA.pour}
        bgAlt="Steaming milk poured into a latte"
      />
      <SectionCoffee hideHeader />
      <Footer />
    </main>
  );
}
