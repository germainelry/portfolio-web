import { useEffect, useState, useRef } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CursorEffects() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const sparkleIdRef = useRef(0);
  const rippleIdRef = useRef(0);
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

  // Ripple on Click Effect
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
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

      {/* Ripple on Click */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.8s ease-out forwards'
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400" />
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

        /* Ripple animation */
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }

        /* Pixelated Magic Wand Cursor */
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="2" y="2" width="4" height="4" fill="%23FFD700"/><rect x="2" y="6" width="4" height="4" fill="%23FFFFFF"/><rect x="6" y="2" width="4" height="4" fill="%23FFFFFF"/><rect x="6" y="6" width="4" height="4" fill="%23FFD700"/><rect x="10" y="10" width="4" height="4" fill="%23FF1493"/><rect x="14" y="14" width="4" height="4" fill="%23FF1493"/><rect x="18" y="18" width="4" height="4" fill="%23FF1493"/><rect x="22" y="22" width="4" height="4" fill="%23C0C0C0"/><rect x="26" y="26" width="4" height="4" fill="%23C0C0C0"/></svg>') 4 4, auto;
        }

        /* Magic Wand with sparkles for interactive elements */
        a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="2" y="2" width="4" height="4" fill="%2300D9FF"/><rect x="2" y="6" width="4" height="4" fill="%23FFFFFF"/><rect x="6" y="2" width="4" height="4" fill="%23FFFFFF"/><rect x="6" y="6" width="4" height="4" fill="%2300D9FF"/><rect x="10" y="10" width="4" height="4" fill="%23FF1493"/><rect x="14" y="14" width="4" height="4" fill="%23FF1493"/><rect x="18" y="18" width="4" height="4" fill="%23FF1493"/><rect x="22" y="22" width="4" height="4" fill="%23C0C0C0"/><rect x="26" y="26" width="4" height="4" fill="%23C0C0C0"/><rect x="14" y="2" width="2" height="2" fill="%23FFD700"/><rect x="2" y="14" width="2" height="2" fill="%23FFD700"/><rect x="26" y="6" width="2" height="2" fill="%2300D9FF"/></svg>') 4 4, pointer !important;
        }

        /* Text editing wand for inputs */
        input[type="text"], input[type="email"], textarea {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32"><rect x="10" y="0" width="4" height="8" fill="%23FF1493"/><rect x="8" y="8" width="2" height="4" fill="%23FF1493"/><rect x="14" y="8" width="2" height="4" fill="%23FF1493"/><rect x="10" y="12" width="4" height="20" fill="%23FF1493"/><rect x="6" y="14" width="2" height="2" fill="%23FFD700"/><rect x="16" y="16" width="2" height="2" fill="%23FFD700"/><rect x="6" y="20" width="2" height="2" fill="%2300D9FF"/></svg>') 12 12, text !important;
        }

        /* Disabled/not-allowed wand */
        [disabled], .cursor-not-allowed {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="2" y="2" width="4" height="4" fill="%23808080"/><rect x="2" y="6" width="4" height="4" fill="%23A0A0A0"/><rect x="6" y="2" width="4" height="4" fill="%23A0A0A0"/><rect x="6" y="6" width="4" height="4" fill="%23808080"/><rect x="10" y="10" width="4" height="4" fill="%23606060"/><rect x="14" y="14" width="4" height="4" fill="%23606060"/><rect x="18" y="18" width="4" height="4" fill="%23606060"/><rect x="22" y="22" width="4" height="4" fill="%23404040"/><rect x="26" y="26" width="4" height="4" fill="%23404040"/></svg>') 4 4, not-allowed !important;
        }
      `}</style>
    </>
  );
}
