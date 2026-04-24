import { Nav } from "./nav";

type PageHeroProps = {
  current: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
};

export function PageHero({ current, eyebrow, title, lede }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--bg)",
        color: "var(--ink)",
        padding:
          "var(--pagehero-top) var(--section-px) var(--pagehero-bottom)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <Nav current={current} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
