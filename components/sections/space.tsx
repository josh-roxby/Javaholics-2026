import { Bean } from "../bean";

const STATS = [
  { n: "2019", l: "Opened" },
  { n: "7", l: "Origins on tap" },
  { n: "01", l: "Block from the park" },
  { n: "6am", l: "First grind" },
];

export function SectionSpace() {
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
              01 &nbsp;/&nbsp; The Space
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
              Across from the{" "}
              <span style={{ fontStyle: "italic", color: "var(--crema)" }}>park.</span>
            </h2>
          </div>
          <div
            className="jv-mono jv-caps"
            style={{ opacity: 0.45, whiteSpace: "nowrap" }}
          >
            Fairview Strand, D03
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)" }}>
            <p style={{ marginTop: 0 }}>
              We opened in a corner of Fairview that felt, for a long time, like it was waiting for
              something. A bus stop, a fence, a run of trees, and across the road, the park.
            </p>
            <p>
              Now we are the warm window on that corner. Come in wet from the rain and the room
              will know your name.
            </p>
          </div>

          <div
            style={{
              aspectRatio: "3 / 4",
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
                  "radial-gradient(ellipse at 50% 30%, rgba(216,120,80,0.12), transparent 60%)",
              }}
            />
            <div
              className="jv-mono jv-caps"
              style={{ position: "absolute", top: 16, left: 16, opacity: 0.45 }}
            >
              Fig. 01
            </div>
            <div
              className="jv-mono jv-caps"
              style={{ position: "absolute", bottom: 16, left: 16, right: 16, opacity: 0.45 }}
            >
              A morning, Fairview Strand
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--roast)",
                opacity: 0.4,
              }}
            >
              <Bean size={120} variant={1} />
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontStyle: "italic",
                fontSize: 22,
                lineHeight: 1.4,
                color: "var(--ink)",
                marginBottom: 32,
                fontWeight: 400,
              }}
            >
              &ldquo;A good cafe is a small social engine. It makes the street around it work a
              little better.&rdquo;
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                paddingTop: 32,
                borderTop: "1px solid var(--line)",
              }}
            >
              {STATS.map((s, i) => (
                <div key={i}>
                  <div
                    className="jv-display"
                    style={{ fontSize: 40, lineHeight: 1, color: "var(--ink)", fontWeight: 400 }}
                  >
                    {s.n}
                  </div>
                  <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginTop: 6 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
