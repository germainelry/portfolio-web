import { useEffect, useState, useRef } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export default function CursorEffects() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const sparkleIdRef = useRef(0);
  const lastSpawnTimeRef = useRef(0);

  // Sparkle Trail Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      // Spawn sparkles every 80ms to avoid too many
      if (now - lastSpawnTimeRef.current < 80) return;
      lastSpawnTimeRef.current = now;

      const newSparkle: Sparkle = {
        id: sparkleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360
      };

      setSparkles((prev) => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Sparkle Trail */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
            animation: 'sparkle 1s ease-out forwards'
          }}
        >
          {/* Four-pointed star sparkle */}
          <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z"
              fill="#FFD700"
              opacity="0.9"
            />
            <circle cx="10" cy="10" r="2" fill="#FFFFFF" />
          </svg>
        </div>
      ))}

      {/* Global Styles for Animations and Custom Cursors */}
      <style>{`
        /* Sparkle animation */
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(0.3);
          }
        }

        /* Windows 95 Style Cursor - Default Arrow */
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 0 L0 16 L4 12 L7 19 L9 18 L6 11 L11 11 Z" fill="%23FFFFFF" stroke="%23000000" stroke-width="1"/></svg>') 0 0, auto;
        }

        /* Windows 95 Hand Pointer for interactive elements */
        a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22"><path d="M8 0 L8 8 L6 8 L6 11 L5 11 L5 13 L4 13 L4 15 L4 17 L5 17 L5 18 L7 18 L7 19 L10 19 L10 18 L12 18 L12 17 L14 17 L14 16 L15 16 L15 13 L14 13 L14 9 L13 9 L13 8 L12 8 L12 9 L11 9 L11 10 L10 10 L10 6 L9 6 L9 0 Z" fill="%23FFFFFF" stroke="%23000000" stroke-width="1"/></svg>') 9 0, pointer !important;
        }

        /* Windows 95 I-beam cursor for text inputs */
        input[type="text"], input[type="email"], textarea {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20"><rect x="0" y="0" width="10" height="3" fill="%23000000"/><rect x="4" y="3" width="2" height="14" fill="%23000000"/><rect x="0" y="17" width="10" height="3" fill="%23000000"/></svg>') 5 10, text !important;
        }

        /* Windows 95 Hourglass/Wait cursor */
        .loading, [aria-busy="true"] {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22"><path d="M2 0 L14 0 L14 3 L8 11 L14 19 L14 22 L2 22 L2 19 L8 11 L2 3 Z" fill="%23FFFFFF" stroke="%23000000" stroke-width="1.5"/></svg>') 8 11, wait !important;
        }

        /* Windows 95 Not-allowed cursor */
        [disabled], .cursor-not-allowed {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="%23FFFFFF" stroke="%23000000" stroke-width="1.5"/><path d="M4 4 L16 16" stroke="%23FF0000" stroke-width="2.5"/></svg>') 10 10, not-allowed !important;
        }
      `}</style>
    </>
  );
}
