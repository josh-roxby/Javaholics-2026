import { Bean } from "./bean";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-2)",
        color: "var(--ink-soft)",
        padding: "56px 48px 32px",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ color: "var(--ember)" }}>
              <Bean size={28} variant={0} color="var(--ember)" strokeWidth={2} />
            </div>
            <div
              className="jv-display"
              style={{ fontSize: 22, fontStyle: "italic", color: "var(--ink)" }}
            >
              Javaholics
            </div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 14 }}>
            <a style={{ cursor: "pointer" }}>Instagram</a>
            <a style={{ cursor: "pointer" }}>Newsletter</a>
            <a style={{ cursor: "pointer" }}>Shop</a>
            <a style={{ cursor: "pointer" }}>Contact</a>
          </div>
        </div>
        <div style={{ height: 1, background: "var(--line)", margin: "28px 0 20px" }} />
        <div
          className="jv-mono jv-caps"
          style={{ display: "flex", justifyContent: "space-between", fontSize: 12, opacity: 0.55 }}
        >
          <span>© 2026 Javaholics, Fairview</span>
          <span>Made in Dublin</span>
        </div>
      </div>
    </footer>
  );
}
