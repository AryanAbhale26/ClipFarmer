"use client";
import { useEffect, useRef } from "react";

interface Star { x: number; y: number; r: number; o: number; }
interface Meteor {
  x: number; y: number; vx: number; vy: number;
  trail: number; op: number; w: number;
}

function spawnMeteor(W: number): Meteor {
  const x = Math.random() * W * 1.6 - W * 0.3;
  const y = -60 - Math.random() * 150;
  const speed = Math.random() * 7 + 5;
  const rad = (210 + Math.random() * 20) * (Math.PI / 180);
  return {
    x, y,
    vx: Math.cos(rad) * speed,
    vy: Math.sin(rad) * speed,
    trail: Math.random() * 110 + 70,
    op: Math.random() * 0.55 + 0.3,
    w: Math.random() * 1.3 + 0.4,
  };
}

export function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const meteors = useRef<Meteor[]>([]);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars.current = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.9 + 0.2,
        o: Math.random() * 0.35 + 0.08,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    // Stagger initial meteors
    for (let i = 0; i < 9; i++) {
      const m = spawnMeteor(canvas.width);
      const t = Math.random();
      m.x += m.vx * t * 70; m.y += m.vy * t * 70;
      meteors.current.push(m);
    }

    let frame = 0;
    const animate = () => {
      frame++;
      const W = canvas.width; const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Stars with subtle twinkle
      for (const s of stars.current) {
        const a = s.o + Math.sin(frame * 0.015 + s.x * 0.01) * 0.06;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, a)})`;
        ctx.fill();
      }

      // Meteors
      const ms = meteors.current;
      for (let i = ms.length - 1; i >= 0; i--) {
        const m = ms[i];
        m.x += m.vx; m.y += m.vy;
        if (m.x < -350 || m.y > H + 120) { ms.splice(i, 1); continue; }

        const len = m.trail;
        const spd = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
        const tx = m.x - (m.vx / spd) * len;
        const ty = m.y - (m.vy / spd) * len;

        // Trail gradient
        const g = ctx.createLinearGradient(tx, ty, m.x, m.y);
        g.addColorStop(0, `rgba(255,255,255,0)`);
        g.addColorStop(0.5, `rgba(255,255,255,${m.op * 0.35})`);
        g.addColorStop(1, `rgba(255,255,255,${m.op})`);
        ctx.beginPath();
        ctx.strokeStyle = g;
        ctx.lineWidth = m.w;
        ctx.lineCap = "round";
        ctx.moveTo(tx, ty); ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Head glow
        const hg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.w * 4);
        hg.addColorStop(0, `rgba(255,255,255,${m.op})`);
        hg.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath(); ctx.arc(m.x, m.y, m.w * 4, 0, Math.PI * 2);
        ctx.fillStyle = hg; ctx.fill();
      }

      // Spawn new meteors
      if (ms.length < 12 && Math.random() < 0.05) ms.push(spawnMeteor(W));

      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(raf.current); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />;
}
