export default function AnimatedBackground() {
  // Generate sparkle positions
  const sparkles = [
    // Top-left
    { x: 12, y: 15, size: 4, delay: 0, color: 'cyan' },
    { x: 25, y: 8, size: 6, delay: 0.8, color: 'white' },
    { x: 18, y: 22, size: 4, delay: 1.6, color: 'cyan' },
    
    // Top-right
    { x: 78, y: 12, size: 6, delay: 0.4, color: 'white' },
    { x: 88, y: 20, size: 4, delay: 1.2, color: 'cyan' },
    { x: 92, y: 10, size: 4, delay: 2.0, color: 'white' },
    
    // Bottom-left
    { x: 8, y: 75, size: 4, delay: 0.6, color: 'white' },
    { x: 22, y: 85, size: 6, delay: 1.4, color: 'cyan' },
    { x: 15, y: 92, size: 4, delay: 2.2, color: 'white' },
    
    // Bottom-right
    { x: 82, y: 78, size: 4, delay: 1.0, color: 'cyan' },
    { x: 90, y: 88, size: 6, delay: 1.8, color: 'white' },
    { x: 75, y: 82, size: 4, delay: 0.2, color: 'cyan' },
    
    // Center
    { x: 45, y: 45, size: 6, delay: 1.5, color: 'white' },
    { x: 55, y: 52, size: 4, delay: 0.9, color: 'cyan' },
    { x: 50, y: 60, size: 4, delay: 2.1, color: 'white' },
  ];

  // Generate floating particles
  const particles = Array.from({ length: 10 }, (_, i) => ({
    x: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 12 + Math.random() * 6,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sparkles */}
      {sparkles.map((sparkle, index) => (
        <div
          key={`sparkle-${index}`}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            opacity: 0,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cross/star shape */}
            <path
              d="M4 0L4 8M0 4L8 4"
              stroke={sparkle.color === 'cyan' ? '#00d9ff' : '#ffffff'}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="4"
              cy="4"
              r="1"
              fill={sparkle.color === 'cyan' ? '#00d9ff' : '#ffffff'}
            />
          </svg>
        </div>
      ))}

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <div
          key={`particle-${index}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-float-up"
          style={{
            left: `${particle.x}%`,
            bottom: '-10px',
            opacity: 0.2,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
