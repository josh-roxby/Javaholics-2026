import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { SectionSpace } from "@/components/sections/space";
import { SectionCoffee } from "@/components/sections/coffee";
import { SectionPeople } from "@/components/sections/people";
import { SectionCommunity } from "@/components/sections/community";

export default function HomePage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Hero />
      <Marquee />
      <SectionSpace />
      <SectionCoffee />
      <SectionPeople />
      <SectionCommunity />
      <Footer />
    </main>
  );
}
