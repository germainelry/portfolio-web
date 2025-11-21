import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function CursorEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const lastSpawnTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      // Spawn particles every 50ms to avoid too many particles
      if (now - lastSpawnTimeRef.current < 50) return;
      lastSpawnTimeRef.current = now;

      const colors = ['#FF1493', '#00D9FF', '#FFD700', '#FFFFFF'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2,
        opacity: 1,
        color: randomColor
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Pixel Dust Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-[9999] pixel-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            animation: 'fadeOut 0.8s ease-out forwards'
          }}
        />
      ))}

      {/* Global Styles for Cursor and Animations */}
      <style>{`
        /* Pixel dust animation */
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) translateY(-20px);
          }
        }

        /* Custom cursor styles */
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: %23FF1493;"><path d="M4 4l16 7-7 1-2 7z"/></svg>') 4 4, auto;
        }

        /* Pointer cursor for interactive elements */
        a, button, [role="button"], input[type="submit"], input[type="button"] {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: %2300D9FF;"><path d="M10 4v4H6l8 8 8-8h-4V4z"/></svg>') 12 12, pointer !important;
        }

        /* Text cursor for text inputs */
        input[type="text"], input[type="email"], textarea {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="2" width="2" height="16" fill="%23FF1493"/></svg>') 10 10, text !important;
        }

        /* Loading/wait cursor */
        .loading, [aria-busy="true"] {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="%23FFD700" stroke-width="2"/><path d="M12 4 L12 8" stroke="%23FFD700" stroke-width="2"/></svg>') 12 12, wait !important;
        }
      `}</style>
    </>
  );
}
