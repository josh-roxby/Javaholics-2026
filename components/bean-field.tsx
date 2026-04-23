"use client";

import { useEffect, useRef } from "react";

type BeanFieldProps = {
  height?: number | string;
  count?: number;
};

type Bean = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  rot: number;
  vr: number;
  shade: number;
  variant: number;
};

export function BeanField({ height = 360, count = 180 }: BeanFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = {
      w: 0,
      h: 0,
      dpr: 1,
      mouse: { x: -9999, y: -9999, active: false },
      tilt: { x: 0, y: 0 },
    };

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      state.w = r.width;
      state.h = r.height;
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = state.w * state.dpr;
      canvas.height = state.h * state.dpr;
      canvas.style.width = state.w + "px";
      canvas.style.height = state.h + "px";
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);
    window.addEventListener("resize", resize);

    const beans: Bean[] = [];
    const n = Math.min(count, Math.floor((state.w * state.h) / 2900));
    for (let i = 0; i < n; i++) {
      beans.push({
        x: Math.random() * state.w,
        y: state.h * 0.5 + Math.random() * state.h * 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0,
        r: 12 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        shade: Math.random(),
        variant: Math.floor(Math.random() * 3),
      });
    }

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      state.mouse.x = e.clientX - r.left;
      state.mouse.y = e.clientY - r.top;
      state.mouse.active = true;
    };
    const onLeave = () => {
      state.mouse.active = false;
      state.mouse.x = -9999;
      state.mouse.y = -9999;
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    const onTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const r = wrap.getBoundingClientRect();
        state.mouse.x = e.touches[0].clientX - r.left;
        state.mouse.y = e.touches[0].clientY - r.top;
        state.mouse.active = true;
      }
    };
    const onTouchEnd = () => {
      state.mouse.active = false;
    };
    wrap.addEventListener("touchmove", onTouch, { passive: true });
    wrap.addEventListener("touchstart", onTouch, { passive: true });
    wrap.addEventListener("touchend", onTouchEnd);

    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.gamma != null && e.beta != null) {
        state.tilt.x = Math.max(-1, Math.min(1, e.gamma / 30));
        state.tilt.y = Math.max(-1, Math.min(1, (e.beta - 30) / 45));
      }
    };
    window.addEventListener("deviceorientation", onOrient);

    const GRAV = 0.22;
    const FRICTION = 0.985;
    const REPEL_R = 110;
    const REPEL_F = 1.6;
    const COLLIDE_ITER = 2;

    const palette = [
      { fill: "#6B4423", crease: "#3A2418" },
      { fill: "#7D5838", crease: "#3A2418" },
      { fill: "#5A3820", crease: "#2A1810" },
      { fill: "#8C6A4A", crease: "#3A2418" },
    ];

    const drawBean = (b: Bean) => {
      const p = palette[Math.floor(b.shade * palette.length) % palette.length];
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);

      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.beginPath();
      ctx.ellipse(0.5, 1.5, b.r * 0.95, b.r * 1.32, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = p.fill;
      ctx.beginPath();
      ctx.ellipse(0, 0, b.r * 0.95, b.r * 1.3, 0, 0, Math.PI * 2);
      ctx.fill();

      const grad = ctx.createRadialGradient(-b.r * 0.3, -b.r * 0.5, b.r * 0.1, 0, 0, b.r * 1.2);
      grad.addColorStop(0, "rgba(255,230,200,0.2)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(0, 0, b.r * 0.95, b.r * 1.3, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = p.crease;
      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(0, -b.r * 1.1);
      ctx.bezierCurveTo(-b.r * 0.3, -b.r * 0.4, b.r * 0.3, b.r * 0.4, 0, b.r * 1.1);
      ctx.stroke();

      ctx.restore();
    };

    const step = () => {
      const { w, h, mouse, tilt } = state;
      const gx = tilt.x * 0.5;
      const gy = GRAV + tilt.y * 0.25;

      for (const b of beans) {
        b.vx += gx;
        b.vy += gy;

        if (mouse.active) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < REPEL_R * REPEL_R && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (1 - d / REPEL_R) * REPEL_F;
            b.vx += (dx / d) * f;
            b.vy += (dy / d) * f;
          }
        }

        b.vx *= FRICTION;
        b.vy *= FRICTION;

        b.x += b.vx;
        b.y += b.vy;
        b.rot += b.vr + b.vx * 0.02;

        if (b.x < b.r) { b.x = b.r; b.vx *= -0.4; }
        if (b.x > w - b.r) { b.x = w - b.r; b.vx *= -0.4; }
        if (b.y > h - b.r) { b.y = h - b.r; b.vy *= -0.35; b.vx *= 0.9; }
        if (b.y < b.r) { b.y = b.r; b.vy *= -0.4; }
      }

      for (let iter = 0; iter < COLLIDE_ITER; iter++) {
        for (let i = 0; i < beans.length; i++) {
          const a = beans[i];
          for (let j = i + 1; j < beans.length; j++) {
            const c = beans[j];
            const dx = c.x - a.x;
            const dy = c.y - a.y;
            const rs = a.r + c.r;
            const d2 = dx * dx + dy * dy;
            if (d2 < rs * rs && d2 > 0.0001) {
              const d = Math.sqrt(d2);
              const overlap = (rs - d) * 0.5;
              const nx = dx / d;
              const ny = dy / d;
              a.x -= nx * overlap;
              a.y -= ny * overlap;
              c.x += nx * overlap;
              c.y += ny * overlap;
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

    let raf = 0;
    let running = true;

    const loop = () => {
      if (!running) return;
      step();
      ctx.clearRect(0, 0, state.w, state.h);
      for (const b of beans) drawBean(b);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      loop();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(wrap);

    const onVis = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVis);

    loop();

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchmove", onTouch);
      wrap.removeEventListener("touchstart", onTouch);
      wrap.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, [count]);

  const requestMotion = () => {
    const D = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<string>;
    };
    if (typeof D.requestPermission === "function") {
      D.requestPermission().catch(() => {});
    }
  };

  return (
    <div
      ref={wrapRef}
      onClick={requestMotion}
      style={{
        position: "relative",
        width: "100%",
        height,
        userSelect: "none",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
