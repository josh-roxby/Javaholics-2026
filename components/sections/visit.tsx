export function SectionVisit() {
  return (
    <section style={{ background: "var(--bg)", color: "var(--ink)", padding: "140px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <div
              className="jv-caps"
              style={{ opacity: 0.55, color: "var(--crema)", marginBottom: 20 }}
            >
              05 &nbsp;/&nbsp; Visit
            </div>
            <h2
              className="jv-display"
              style={{
                fontSize: "clamp(44px, 5.5vw, 76px)",
                margin: 0,
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              Come over. <br />
              <span style={{ fontStyle: "italic", color: "var(--crema)" }}>Stay a while.</span>
            </h2>
            <div style={{ marginTop: 40, fontSize: 15, lineHeight: 1.7 }}>
              <div style={{ marginBottom: 24 }}>
                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 8 }}>
                  Address
                </div>
                Fairview Strand, Dublin 3, D03 N2X8
              </div>
              <div style={{ marginBottom: 24 }}>
                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 8 }}>
                  Hours
                </div>
                Mon to Fri, 7:30 to 18:00
                <br />
                Sat to Sun, 8:30 to 18:00
              </div>
              <div>
                <div className="jv-mono jv-caps" style={{ opacity: 0.55, marginBottom: 8 }}>
                  Getting here
                </div>
                130 bus, Fairview stop
                <br />
                DART, Clontarf Road, 8 min walk
              </div>
            </div>
            <button className="btn btn-ghost" style={{ marginTop: 36 }}>
              Open in maps
            </button>
          </div>

          <div
            style={{
              background: "var(--bg-2)",
              aspectRatio: "1.5 / 1",
              position: "relative",
              border: "1px solid var(--line)",
              overflow: "hidden",
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
  );
}
