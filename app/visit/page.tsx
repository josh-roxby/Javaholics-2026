import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata = { title: "Visit" };

export default function VisitPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
        color: "var(--ink)",
      }}
    >
      <Nav current="Visit" />

      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "110px 48px 60px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <div
                className="jv-caps"
                style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 18 }}
              >
                Visit
              </div>
              <h1
                className="jv-display"
                style={{
                  fontSize: "clamp(36px, 4.6vw, 64px)",
                  margin: 0,
                  lineHeight: 1.02,
                  fontWeight: 400,
                }}
              >
                Come over.{" "}
                <span style={{ fontStyle: "italic", color: "var(--crema)" }}>Stay a while.</span>
              </h1>

              <div
                style={{
                  marginTop: 32,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                  fontSize: 14,
                  lineHeight: 1.55,
                }}
              >
                <div>
                  <div
                    className="jv-mono jv-caps"
                    style={{ opacity: 0.55, marginBottom: 6 }}
                  >
                    Address
                  </div>
                  Fairview Strand
                  <br />
                  Dublin 3, D03 N2X8
                </div>
                <div>
                  <div
                    className="jv-mono jv-caps"
                    style={{ opacity: 0.55, marginBottom: 6 }}
                  >
                    Hours
                  </div>
                  Mon–Fri, 7:30–18:00
                  <br />
                  Sat–Sun, 8:30–18:00
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <div
                    className="jv-mono jv-caps"
                    style={{ opacity: 0.55, marginBottom: 6 }}
                  >
                    Getting here
                  </div>
                  130 bus, Fairview stop · DART, Clontarf Road, 8 min walk
                </div>
              </div>

              <div
                style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}
              >
                <a
                  className="btn btn-primary"
                  href="https://maps.google.com/?q=Fairview+Strand+Dublin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in maps
                </a>
                <a className="btn btn-ghost" href="/coffee">
                  See the coffee
                </a>
              </div>
            </div>

            <div
              style={{
                background: "var(--bg-2)",
                aspectRatio: "1.5 / 1",
                position: "relative",
                border: "1px solid var(--line)",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "58%",
                  height: "72%",
                  background: "rgba(140,160,120,0.10)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "38%",
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: "var(--line-strong)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "55%",
                  right: 0,
                  height: 1,
                  background: "var(--line-strong)",
                }}
              />
              <div style={{ position: "absolute", left: "30%", top: "57%" }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--ember)",
                    boxShadow:
                      "0 0 0 6px rgba(216,120,80,0.2), 0 0 0 14px rgba(216,120,80,0.1)",
                  }}
                />
              </div>
              <div
                className="jv-display"
                style={{
                  position: "absolute",
                  left: "calc(30% + 24px)",
                  top: "52%",
                  fontSize: 18,
                  fontStyle: "italic",
                  color: "var(--ember)",
                }}
              >
                Javaholics
              </div>
              <div
                className="jv-mono jv-caps"
                style={{ position: "absolute", right: 24, bottom: 24, opacity: 0.6 }}
              >
                Fairview Park
              </div>
              <div
                className="jv-mono jv-caps"
                style={{ position: "absolute", left: 24, bottom: 24, opacity: 0.45 }}
              >
                North Strand
              </div>
              <div
                className="jv-mono jv-caps"
                style={{ position: "absolute", left: 24, top: 24, opacity: 0.45 }}
              >
                Dublin 3
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
