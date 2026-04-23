// Bean physics — Canvas 2D, soft simple beans reacting individually
// Desktop: mouse repels. Mobile: device tilt adds gravity direction.
// Half-height of hero fills with beans, "pour" / "spirit-measure" vibe.

function BeanField({ height = 360, count = 180 }) {
  const canvasRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const stateRef = React.useRef({ beans: [], mouse: { x: -9999, y: -9999, active: false }, tilt: { x: 0, y: 0 }, w: 0, h: 0, dpr: 1 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    const S = stateRef.current;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      S.w = r.width;
      S.h = r.height;
      S.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = S.w * S.dpr;
      canvas.height = S.h * S.dpr;
      canvas.style.width = S.w + 'px';
      canvas.style.height = S.h + 'px';
      ctx.setTransform(S.dpr, 0, 0, S.dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);
    window.addEventListener('resize', resize);

    // Spawn beans — stacked near bottom, will settle
    const beans = [];
    const n = Math.min(count, Math.floor((S.w * S.h) / 2900));
    for (let i = 0; i < n; i++) {
      beans.push({
        x: Math.random() * S.w,
        y: S.h * 0.5 + Math.random() * S.h * 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0,
        r: 12 + Math.random() * 6,   // radius
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        shade: Math.random(), // 0..1 for color variation
        variant: Math.floor(Math.random() * 3),
      });
    }
    S.beans = beans;

    // Mouse
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      S.mouse.x = e.clientX - r.left;
      S.mouse.y = e.clientY - r.top;
      S.mouse.active = true;
    };
    const onLeave = () => { S.mouse.active = false; S.mouse.x = -9999; S.mouse.y = -9999; };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    // Touch for mobile
    const onTouch = (e) => {
      if (e.touches && e.touches[0]) {
        const r = wrap.getBoundingClientRect();
        S.mouse.x = e.touches[0].clientX - r.left;
        S.mouse.y = e.touches[0].clientY - r.top;
        S.mouse.active = true;
      }
    };
    const onTouchEnd = () => { S.mouse.active = false; };
    wrap.addEventListener('touchmove', onTouch, { passive: true });
    wrap.addEventListener('touchstart', onTouch, { passive: true });
    wrap.addEventListener('touchend', onTouchEnd);

    // Device orientation for mobile — gamma (left/right tilt), beta (forward/back)
    const onOrient = (e) => {
      if (e.gamma != null && e.beta != null) {
        S.tilt.x = Math.max(-1, Math.min(1, e.gamma / 30));
        S.tilt.y = Math.max(-1, Math.min(1, (e.beta - 30) / 45));
      }
    };
    window.addEventListener('deviceorientation', onOrient);

    // Simulation
    const GRAV = 0.22;
    const FRICTION = 0.985;
    const REPEL_R = 110;
    const REPEL_F = 1.6;
    const COLLIDE_ITER = 2;

    const step = () => {
      const { w, h, mouse, tilt } = S;
      const gx = tilt.x * 0.5;
      const gy = GRAV + tilt.y * 0.25;

      for (const b of beans) {
        // Gravity + tilt
        b.vx += gx;
        b.vy += gy;

        // Mouse repel
        if (mouse.active) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const d2 = dx*dx + dy*dy;
          if (d2 < REPEL_R * REPEL_R && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (1 - d / REPEL_R) * REPEL_F;
            b.vx += (dx / d) * f;
            b.vy += (dy / d) * f;
          }
        }

        // Friction
        b.vx *= FRICTION;
        b.vy *= FRICTION;

        // Integrate
        b.x += b.vx;
        b.y += b.vy;
        b.rot += b.vr + b.vx * 0.02;

        // Walls
        if (b.x < b.r) { b.x = b.r; b.vx *= -0.4; }
        if (b.x > w - b.r) { b.x = w - b.r; b.vx *= -0.4; }
        if (b.y > h - b.r) { b.y = h - b.r; b.vy *= -0.35; b.vx *= 0.9; }
        if (b.y < b.r) { b.y = b.r; b.vy *= -0.4; }
      }

      // Bean-bean collisions (multiple iterations for stability)
      for (let iter = 0; iter < COLLIDE_ITER; iter++) {
        for (let i = 0; i < beans.length; i++) {
          const a = beans[i];
          for (let j = i + 1; j < beans.length; j++) {
            const c = beans[j];
            const dx = c.x - a.x;
            const dy = c.y - a.y;
            const rs = a.r + c.r;
            const d2 = dx*dx + dy*dy;
            if (d2 < rs * rs && d2 > 0.0001) {
              const d = Math.sqrt(d2);
              const overlap = (rs - d) * 0.5;
              const nx = dx / d;
              const ny = dy / d;
              a.x -= nx * overlap;
              a.y -= ny * overlap;
              c.x += nx * overlap;
              c.y += ny * overlap;
              // tiny velocity exchange
              const relV = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
              if (relV < 0) {
                const imp = relV * 0.5;
                a.vx += nx * imp;
                a.vy += ny * imp;
                c.vx -= nx * imp;
                c.vy -= ny * imp;
              }
            }
          }
        }
      }
    };

    // Drawing — soft ellipse bean with crease
    const drawBean = (ctx, b) => {
      const cream = '#E8DFC9';
      // Varietal palette — all warm, dark
      const palette = [
        { fill: '#6B4423', crease: '#3A2418' },
        { fill: '#7D5838', crease: '#3A2418' },
        { fill: '#5A3820', crease: '#2A1810' },
        { fill: '#8C6A4A', crease: '#3A2418' },
      ];
      const p = palette[Math.floor(b.shade * palette.length) % palette.length];

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);

      // Soft shadow
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.ellipse(0.5, 1.5, b.r * 0.95, b.r * 1.32, 0, 0, Math.PI * 2);
      ctx.fill();

      // Body
      ctx.fillStyle = p.fill;
      ctx.beginPath();
      ctx.ellipse(0, 0, b.r * 0.95, b.r * 1.3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Highlight
      const grad = ctx.createRadialGradient(-b.r * 0.3, -b.r * 0.5, b.r * 0.1, 0, 0, b.r * 1.2);
      grad.addColorStop(0, 'rgba(255,230,200,0.2)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(0, 0, b.r * 0.95, b.r * 1.3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Crease
      ctx.strokeStyle = p.crease;
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(0, -b.r * 1.1);
      ctx.bezierCurveTo(-b.r * 0.3, -b.r * 0.4, b.r * 0.3, b.r * 0.4, 0, b.r * 1.1);
      ctx.stroke();

      ctx.restore();
    };

    let raf;
    const loop = () => {
      step();
      ctx.clearRect(0, 0, S.w, S.h);
      for (const b of S.beans) drawBean(ctx, b);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
      wrap.removeEventListener('touchmove', onTouch);
      wrap.removeEventListener('touchstart', onTouch);
      wrap.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('deviceorientation', onOrient);
    };
  }, [count]);

  // iOS motion-permission helper
  const requestMotion = () => {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission().catch(() => {});
    }
  };

  return (
    <div
      ref={wrapRef}
      onClick={requestMotion}
      style={{
        position: 'relative', width: '100%', height,
        cursor: 'none',
        userSelect: 'none',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}

Object.assign(window, { BeanField });
