import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionPeople } from "@/components/sections/people";
import { SectionCommunity } from "@/components/sections/community";

export const metadata = { title: "People — Javaholics" };

export default function PeoplePage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <PageHero
        current="People"
        eyebrow="People"
        title={
          <>
            The faces{" "}
            <span style={{ fontStyle: "italic", color: "var(--crema)" }}>behind the bar.</span>
          </>
        }
        lede="Six humans and a dog. Most of us live around here, and a lot of you do too."
      />
      <SectionPeople />
      <SectionCommunity />
      <Footer />
    </main>
  );
}
