// Hero variations — three motion approaches
// All share: big community statement, navy/espresso/cream palette, line-art illustration

// ─────────────────────────────────────────────────────────
// HERO 1 — Kinetic type + line figure
// Big statement, the line-art character animates in, word "community" pulses
// ─────────────────────────────────────────────────────────
const HeroKinetic = ({ compact = false }) => {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => setPhase(1), 200);
    return () => clearTimeout(t);
  }, []);

  const scale = compact ? 0.55 : 1;

  return (
    <section style={{
      position: 'relative', minHeight: compact ? 480 : 820,
      background: 'var(--paper)', color: 'var(--ink)',
      overflow: 'hidden', padding: compact ? '48px 40px 32px' : '72px 72px 48px',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Top nav */}
      <HeroNav compact={compact} />

      {/* Tiny meta strip */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: compact ? 20 : 36, opacity: phase ? 1 : 0, transition: 'opacity 600ms 200ms',
      }}>
        <div className="jv-mono jv-caps" style={{ opacity: 0.6 }}>53.368°N · 6.232°W</div>
        <div className="jv-mono jv-caps" style={{ opacity: 0.6 }}>Fairview · Dublin 3</div>
        <div className="jv-mono jv-caps" style={{ opacity: 0.6 }}>Est. 2019</div>
      </div>

      {/* Main statement */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', marginTop: compact ? 20 : 40, gap: compact ? 20 : 40 }}>
        <div>
          <div className="jv-display" style={{
            fontSize: compact ? 72 : 148, lineHeight: 0.88, color: 'var(--navy)',
            transform: phase ? 'none' : 'translateY(30px)', opacity: phase ? 1 : 0,
            transition: 'all 800ms cubic-bezier(.2,.7,.3,1)',
          }}>
            Coffee<br />
            <span style={{ fontStyle: 'italic', color: 'var(--roast)' }}>with</span>
          </div>
        </div>

        {/* Line figure in middle */}
        <div style={{
          color: 'var(--ember)',
          transform: phase ? 'translateY(0) rotate(-4deg)' : 'translateY(40px) rotate(-12deg)',
          opacity: phase ? 1 : 0,
          transition: 'all 1200ms cubic-bezier(.2,.7,.3,1) 200ms',
          animation: phase ? 'jv-float 6s ease-in-out infinite 1200ms' : 'none',
        }}>
          <LineFigure size={compact ? 180 : 320} strokeWidth={compact ? 2 : 2.6} />
        </div>

        <div style={{ textAlign: 'right' }}>
          <div className="jv-display" style={{
            fontSize: compact ? 72 : 148, lineHeight: 0.88, color: 'var(--navy)',
            transform: phase ? 'none' : 'translateY(30px)', opacity: phase ? 1 : 0,
            transition: 'all 800ms cubic-bezier(.2,.7,.3,1) 100ms',
          }}>
            <span style={{ fontStyle: 'italic', color: 'var(--roast)' }}>the</span><br />
            <span style={{
              display: 'inline-block',
              animation: phase ? 'jv-float 4s ease-in-out infinite' : 'none',
            }}>people.</span>
          </div>
        </div>
      </div>

      {/* Bottom row — subhead + CTAs */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end',
        gap: 40, marginTop: compact ? 24 : 48,
        opacity: phase ? 1 : 0, transition: 'opacity 800ms 600ms',
      }}>
        <div style={{ maxWidth: compact ? 360 : 520, fontSize: compact ? 14 : 18, lineHeight: 1.5, color: 'var(--espresso)' }}>
          A Fairview cafe. Single-origin roasts, house-music playlists, sun across the park, and the same faces every morning. We just make coffee — and somehow, a community.
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={{
            background: 'var(--navy)', color: 'var(--paper)', border: 'none',
            padding: compact ? '10px 20px' : '16px 28px', fontSize: compact ? 13 : 15, fontWeight: 500,
            borderRadius: 100, cursor: 'pointer', fontFamily: 'inherit',
          }}>Visit the cafe <span style={{ marginLeft: 8 }}>→</span></button>
          <button style={{
            background: 'transparent', color: 'var(--navy)', border: '1.5px solid var(--navy)',
            padding: compact ? '10px 20px' : '16px 28px', fontSize: compact ? 13 : 15, fontWeight: 500,
            borderRadius: 100, cursor: 'pointer', fontFamily: 'inherit',
          }}>Shop beans</button>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// HERO 2 — Vinyl / DJ energy
// Big spinning record, statement orbits, music-forward
// ─────────────────────────────────────────────────────────
const HeroVinyl = ({ compact = false }) => {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => { const t = setTimeout(() => setPhase(1), 200); return () => clearTimeout(t); }, []);

  return (
    <section style={{
      position: 'relative', minHeight: compact ? 480 : 820,
      background: 'var(--navy)', color: 'var(--paper)',
      overflow: 'hidden', padding: compact ? '48px 40px 32px' : '72px 72px 48px',
      display: 'flex', flexDirection: 'column',
    }}>
      <HeroNav compact={compact} dark />

      {/* Centered vinyl */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%', transform: 'translate(-50%, -44%)',
        color: 'var(--crema)',
        opacity: phase ? 0.85 : 0,
        transition: 'opacity 1400ms',
      }}>
        <LineVinyl size={compact ? 420 : 820} strokeWidth={compact ? 0.9 : 1.2} spinning />
      </div>

      {/* Statement overlay */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2, marginTop: compact ? 20 : 40 }}>
        <div className="jv-mono jv-caps" style={{ color: 'var(--ember)', marginBottom: compact ? 12 : 20, opacity: phase ? 1 : 0, transition: 'opacity 600ms 300ms' }}>
          ⏺ Now playing · House · 98 BPM
        </div>
        <h1 className="jv-display" style={{
          fontSize: compact ? 76 : 168, lineHeight: 0.9, textAlign: 'center', margin: 0,
          transform: phase ? 'none' : 'translateY(30px)', opacity: phase ? 1 : 0,
          transition: 'all 900ms cubic-bezier(.2,.7,.3,1) 100ms',
        }}>
          Pour it slow.<br />
          <span style={{ fontStyle: 'italic', color: 'var(--ember)' }}>Play it loud.</span>
        </h1>
        <div style={{
          maxWidth: compact ? 380 : 560, textAlign: 'center',
          fontSize: compact ? 14 : 18, lineHeight: 1.5, marginTop: compact ? 20 : 36, color: 'var(--crema)',
          opacity: phase ? 1 : 0, transition: 'opacity 800ms 500ms',
        }}>
          A Fairview coffee shop run by a former DJ. Great beans, house vibes, sunny stoop across from the park. Since 2019.
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: compact ? 20 : 32, borderTop: '1px solid rgba(243,236,222,0.2)',
        opacity: phase ? 1 : 0, transition: 'opacity 800ms 700ms',
      }}>
        <div className="jv-mono jv-caps" style={{ opacity: 0.65 }}>Side A · Fairview, Dublin</div>
        <button style={{
          background: 'var(--ember)', color: 'var(--paper)', border: 'none',
          padding: compact ? '10px 20px' : '16px 28px', fontSize: compact ? 13 : 15, fontWeight: 500,
          borderRadius: 100, cursor: 'pointer', fontFamily: 'inherit',
        }}>Hear the mix <span style={{ marginLeft: 8 }}>♪</span></button>
        <div className="jv-mono jv-caps" style={{ opacity: 0.65 }}>Track 01 / Community</div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// HERO 3 — Editorial split / illustrated scene
// Large type, Fairview park scene, cream + navy, stoic + editorial
// ─────────────────────────────────────────────────────────
const HeroEditorial = ({ compact = false }) => {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => { const t = setTimeout(() => setPhase(1), 200); return () => clearTimeout(t); }, []);

  return (
    <section style={{
      position: 'relative', minHeight: compact ? 480 : 820,
      background: 'var(--paper)', color: 'var(--ink)',
      overflow: 'hidden', padding: 0,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ padding: compact ? '28px 40px 0' : '40px 72px 0' }}>
        <HeroNav compact={compact} />
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: compact ? '1.1fr 1fr' : '1.15fr 1fr', gap: 0, marginTop: compact ? 16 : 32 }}>
        {/* Left — type */}
        <div style={{ padding: compact ? '20px 40px 32px' : '40px 72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="jv-mono jv-caps" style={{
              opacity: phase ? 0.65 : 0, transition: 'opacity 600ms',
              color: 'var(--roast)', marginBottom: compact ? 20 : 40,
            }}>№ 001 — A coffee shop in Fairview</div>
            <h1 className="jv-display" style={{
              fontSize: compact ? 84 : 176, lineHeight: 0.86, margin: 0, color: 'var(--navy)',
              transform: phase ? 'none' : 'translateY(40px)', opacity: phase ? 1 : 0,
              transition: 'all 1000ms cubic-bezier(.2,.7,.3,1) 100ms',
            }}>
              Neighbours,<br />
              <span style={{ fontStyle: 'italic', color: 'var(--roast)' }}>beans,</span><br />
              and a good<br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                record.
                <span style={{ position: 'absolute', bottom: compact ? -8 : -14, left: 0, color: 'var(--ember)' }}>
                  <LineSquiggle width={compact ? 180 : 320} strokeWidth={compact ? 2.5 : 3.5} />
                </span>
              </span>
            </h1>
          </div>
          <div style={{
            display: 'flex', alignItems: 'end', gap: compact ? 24 : 48, marginTop: compact ? 32 : 64,
            opacity: phase ? 1 : 0, transition: 'opacity 800ms 600ms',
          }}>
            <div style={{ maxWidth: compact ? 280 : 400, fontSize: compact ? 14 : 17, lineHeight: 1.55, color: 'var(--espresso)' }}>
              Across the road from Fairview Park, we roast, we pour, we play, and the same faces come back every morning. That's the whole thing.
            </div>
            <button style={{
              background: 'var(--navy)', color: 'var(--paper)', border: 'none',
              padding: compact ? '12px 22px' : '18px 32px', fontSize: compact ? 13 : 15, fontWeight: 500,
              borderRadius: 100, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
            }}>Visit us →</button>
          </div>
        </div>

        {/* Right — illustrated scene */}
        <div style={{
          background: 'var(--navy)', color: 'var(--crema)', position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          {/* Sun */}
          <div style={{
            position: 'absolute', top: compact ? 40 : 80, right: compact ? 40 : 80,
            color: 'var(--ember)', opacity: phase ? 0.8 : 0,
            transform: phase ? 'rotate(0deg)' : 'rotate(-30deg)',
            transition: 'all 1800ms cubic-bezier(.2,.7,.3,1) 300ms',
            animation: phase ? 'jv-spin 80s linear infinite' : 'none',
          }}>
            <LineSun size={compact ? 140 : 240} strokeWidth={compact ? 1.2 : 1.6} />
          </div>
          {/* Figure */}
          <div style={{
            position: 'absolute', bottom: compact ? 80 : 140, left: compact ? 40 : 80,
            color: 'var(--ember)',
            transform: phase ? 'translateY(0)' : 'translateY(60px)',
            opacity: phase ? 1 : 0,
            transition: 'all 1200ms cubic-bezier(.2,.7,.3,1) 600ms',
          }}>
            <LineFigure size={compact ? 200 : 340} strokeWidth={compact ? 2.2 : 2.8} />
          </div>
          {/* Trees at bottom */}
          <div style={{
            color: 'var(--crema)', opacity: 0.7,
            transform: phase ? 'translateY(0)' : 'translateY(40px)',
            transition: 'transform 1000ms cubic-bezier(.2,.7,.3,1) 400ms',
          }}>
            <LineTrees width={compact ? 600 : 900} strokeWidth={compact ? 1.2 : 1.6} />
          </div>
          {/* Caption */}
          <div className="jv-mono jv-caps" style={{
            position: 'absolute', top: compact ? 28 : 48, left: compact ? 32 : 56,
            color: 'var(--crema)', opacity: phase ? 0.65 : 0, transition: 'opacity 600ms 800ms',
          }}>
            Fig. 01 — A morning across from the park
          </div>
        </div>
      </div>
    </section>
  );
};

// Shared nav
const HeroNav = ({ compact = false, dark = false }) => (
  <nav style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingBottom: compact ? 12 : 20,
    borderBottom: `1px solid ${dark ? 'rgba(243,236,222,0.2)' : 'rgba(14,30,58,0.15)'}`,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ color: dark ? 'var(--ember)' : 'var(--ember)' }}>
        <LineFigure size={compact ? 32 : 42} strokeWidth={2.4} />
      </div>
      <div className="jv-display" style={{ fontSize: compact ? 18 : 24, color: 'currentColor', fontStyle: 'italic' }}>Javaholics</div>
    </div>
    <div style={{ display: 'flex', gap: compact ? 20 : 36, fontSize: compact ? 12 : 14, fontWeight: 500 }}>
      {['The space', 'Coffee', 'People', 'Community', 'Shop'].map((x, i) => (
        <a key={i} style={{ opacity: 0.85, cursor: 'pointer' }}>{x}</a>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <span className="jv-mono jv-caps" style={{ opacity: 0.6 }}>Open · 7:30—18:00</span>
    </div>
  </nav>
);

Object.assign(window, { HeroKinetic, HeroVinyl, HeroEditorial, HeroNav });
