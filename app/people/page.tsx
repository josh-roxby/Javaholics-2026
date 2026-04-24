import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionStories } from "@/components/sections/stories";
import { SectionPeople } from "@/components/sections/people";
import { SectionCommunity } from "@/components/sections/community";
import { MEDIA } from "@/lib/media";

export const metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <PageHero
        current="People"
        eyebrow="The People"
        title={
          <>
            The regulars,{" "}
            <span style={{ fontStyle: "italic", color: "var(--crema)" }}>and the room.</span>
          </>
        }
        lede="A few of the stories behind the seats, the bar, and the mornings we open up. Fairview runs on its regulars."
        bgImage={MEDIA.barista}
        bgAlt="Behind the Javaholics bar"
      />
      <SectionStories />
      <SectionPeople eyebrow="02  /  Behind the bar" />
      <SectionCommunity eyebrow="03  /  More voices" />
      <Footer />
    </main>
  );
}
