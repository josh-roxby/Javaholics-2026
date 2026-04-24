import Image from "next/image";
import { Nav } from "./nav";

type PageHeroProps = {
  current: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  bgImage?: string;
  bgAlt?: string;
};

export function PageHero({ current, eyebrow, title, lede, bgImage, bgAlt = "" }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--bg)",
        color: "var(--ink)",
        padding:
          "var(--pagehero-top) var(--section-px) var(--pagehero-bottom)",
        borderBottom: "1px solid var(--line)",
        overflow: "hidden",
      }}
    >
      {bgImage && (
        <div
          aria-hidden={!bgAlt}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={bgImage}
            alt={bgAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.32 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(10,18,32,0.55), rgba(10,18,32,0.92))",
            }}
          />
        </div>
      )}
      <Nav current={current} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          className="jv-caps"
          style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 20 }}
        >
          {eyebrow}
        </div>
        <h1
          className="jv-display jv-section-title"
          style={{
            fontSize: "clamp(44px, 6vw, 84px)",
            margin: 0,
            lineHeight: 1.02,
            fontWeight: 400,
            maxWidth: 1000,
          }}
        >
          {title}
        </h1>
        {lede && (
          <p
            style={{
              marginTop: 32,
              maxWidth: 560,
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
            }}
          >
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
