"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  isEmber: boolean;
  phase: number;
}

const PARTICLE_COLORS = ["#D4A843", "#E8C96A", "#A83232", "#8B5FC8"];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let isVisible = !document.hidden;
    const particles: Particle[] = [];

    const getParticleCount = () => (window.innerWidth < 768 ? 30 : 80);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const target = getParticleCount();
      if (particles.length < target) {
        const needed = target - particles.length;
        for (let i = 0; i < needed; i++) {
          particles.push(createParticle());
        }
      } else if (particles.length > target) {
        particles.splice(target);
      }
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 300);
    };

    const createParticle = (spawnAtBottom = false): Particle => {
      const isEmber = Math.random() < 0.1;
      const size = isEmber
        ? Math.random() * 2 + 4
        : Math.random() * 3 + 1;

      return {
        x: Math.random() * canvas.width,
        y: spawnAtBottom
          ? canvas.height + 10
          : Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.5 + 0.1),
        opacity: Math.random() * 0.6 + 0.2,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        isEmber,
        phase: Math.random() * Math.PI * 2,
      };
    };

    const init = () => {
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    };

    let lastTime = 0;
    const animate = (timestamp: number) => {
      const time = timestamp * 0.001;
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX * (delta / 16);
        p.y += p.speedY * (delta / 16);
        p.opacity -= 0.001 * (delta / 16);

        if (p.y < -10 || p.opacity <= 0) {
          particles[i] = createParticle(true);
          continue;
        }

        const shimmerOpacity =
          p.opacity * (0.5 + 0.5 * Math.sin(time * p.speedY * 8 + p.phase + i));

        if (p.isEmber) {
          const gradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * 2.5
          );
          gradient.addColorStop(0, p.color);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.globalAlpha = shimmerOpacity * 0.4;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = shimmerOpacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (isVisible) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = 0;
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    resize();
    init();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", debouncedResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      aria-hidden="true"
    />
  );
}
