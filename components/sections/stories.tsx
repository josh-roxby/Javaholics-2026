import { Bean } from "../bean";
import { LOCAL_STORIES, type LocalStory } from "@/lib/stories";

function StoryPortrait({ story, index }: { story: LocalStory; index: number }) {
  return (
    <div
      style={{
        aspectRatio: "4 / 5",
        background: "var(--bg-2)",
        position: "relative",
        border: "1px solid var(--line)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(216,120,80,0.14), transparent 65%)",
        }}
      />
      <div
        className="jv-mono jv-caps"
        style={{ position: "absolute", top: 18, left: 18, opacity: 0.5 }}
      >
        Fig. 0{index + 1}
      </div>
      <div
        className="jv-mono jv-caps"
        style={{ position: "absolute", top: 18, right: 18, opacity: 0.5 }}
      >
        {story.since}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--ember)",
        }}
      >
        <Bean
          size={160}
          variant={story.bean}
          color="var(--crema)"
          fill="var(--roast)"
          strokeWidth={1.2}
        />
      </div>
      <div
        className="jv-mono jv-caps"
        style={{
          position: "absolute",
          bottom: 18,
          left: 18,
          right: 18,
          opacity: 0.55,
        }}
      >
        {story.name}, Fairview
      </div>
    </div>
  );
}

function StoryBody({ story, index }: { story: LocalStory; index: number }) {
  return (
    <div>
      <div
        className="jv-mono jv-caps"
        style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 16 }}
      >
        0{index + 1} &nbsp;/&nbsp; {story.since}
      </div>
      <h3
        className="jv-display"
        style={{
          fontSize: "clamp(32px, 3.2vw, 44px)",
          margin: 0,
          lineHeight: 1.05,
          fontWeight: 400,
        }}
      >
        {story.name},{" "}
        <span style={{ fontStyle: "italic", color: "var(--crema)" }}>{story.role}.</span>
      </h3>

      <blockquote
        style={{
          margin: "28px 0 0",
          padding: 0,
          fontFamily: '"Fraunces", serif',
          fontStyle: "italic",
          fontSize: "clamp(20px, 1.7vw, 24px)",
          lineHeight: 1.35,
          color: "var(--ink)",
          fontWeight: 400,
          maxWidth: 520,
        }}
      >
        &ldquo;{story.quote}&rdquo;
      </blockquote>

      <div
        style={{
          marginTop: 28,
          maxWidth: 520,
          fontSize: 15.5,
          lineHeight: 1.7,
          color: "var(--ink-soft)",
        }}
      >
        {story.body.map((p, i) => (
          <p key={i} style={{ margin: i === 0 ? 0 : "16px 0 0" }}>
            {p}
          </p>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          paddingTop: 20,
          borderTop: "1px solid var(--line)",
          display: "flex",
          gap: 32,
        }}
      >
        <div>
          <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 6 }}>
            Order
          </div>
          <div style={{ fontSize: 14 }}>{story.order}</div>
        </div>
      </div>
    </div>
  );
}

export function SectionStories() {
  return (
    <section style={{ background: "var(--bg)", color: "var(--ink)", padding: "140px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            gap: 48,
            marginBottom: 80,
          }}
        >
          <div>
            <div
              className="jv-caps"
              style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 20 }}
            >
              01 &nbsp;/&nbsp; The Stories
            </div>
            <h2
              className="jv-display"
              style={{
                fontSize: "clamp(44px, 6vw, 84px)",
                margin: 0,
                lineHeight: 1.02,
                maxWidth: 900,
                fontWeight: 400,
              }}
            >
              Fairview,{" "}
              <span style={{ fontStyle: "italic", color: "var(--crema)" }}>
                in their own words.
              </span>
            </h2>
          </div>
          <div
            className="jv-mono jv-caps"
            style={{ opacity: 0.45, whiteSpace: "nowrap" }}
          >
            A few of the many
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
          {LOCAL_STORIES.map((story, i) => {
            const portraitFirst = i % 2 === 0;
            return (
              <article
                key={story.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(280px, 440px) 1fr",
                  gap: 72,
                  alignItems: "center",
                }}
              >
                {portraitFirst ? (
                  <>
                    <StoryPortrait story={story} index={i} />
                    <StoryBody story={story} index={i} />
                  </>
                ) : (
                  <>
                    <StoryBody story={story} index={i} />
                    <StoryPortrait story={story} index={i} />
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
