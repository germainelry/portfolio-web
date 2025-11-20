// Comprehensive 16-bit pixel art icon library
// All icons 64x64px with 2px black outlines, vibrant colors, transparent backgrounds

interface IconProps {
  size?: number;
  className?: string;
}

// ============================================
// PROGRAMMING LANGUAGES
// ============================================

export const PythonIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Python logo - two snakes intertwined */}
    {/* Blue snake (top-left to bottom-right) */}
    <path d="M16 8 L24 8 L32 16 L32 24 L24 32 L16 32 L8 24 L8 16 Z" fill="#3776ab" stroke="#000" strokeWidth="2"/>
    <circle cx="20" cy="16" r="3" fill="#ffd43b"/>
    
    {/* Yellow snake (top-right to bottom-left) */}
    <path d="M48 8 L56 16 L56 24 L48 32 L40 32 L32 40 L32 48 L40 56 L48 56 L56 48 L56 40 Z" fill="#ffd43b" stroke="#000" strokeWidth="2"/>
    <circle cx="44" cy="48" r="3" fill="#3776ab"/>
    
    {/* Connection */}
    <rect x="28" y="28" width="8" height="8" fill="#3776ab" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const JavaScriptIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Yellow square document */}
    <rect x="8" y="8" width="48" height="48" fill="#f7df1e" stroke="#000" strokeWidth="2"/>
    {/* Slight page curl top-right */}
    <path d="M56 8 L48 8 L56 16 Z" fill="#e5c700" stroke="#000" strokeWidth="2"/>
    
    {/* JS text */}
    <text x="32" y="42" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="#000" textAnchor="middle">JS</text>
  </svg>
);

export const TypeScriptIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Blue rounded square */}
    <rect x="8" y="8" width="48" height="48" rx="6" fill="#3178c6" stroke="#000" strokeWidth="2"/>
    
    {/* TS text in white */}
    <text x="32" y="42" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">TS</text>
  </svg>
);

export const SQLIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Database cylinders stacked */}
    {/* Top cylinder */}
    <ellipse cx="32" cy="16" rx="20" ry="8" fill="#336791" stroke="#000" strokeWidth="2"/>
    <rect x="12" y="16" width="40" height="8" fill="#336791"/>
    <ellipse cx="32" cy="24" rx="20" ry="8" fill="#4a7ba7" stroke="#000" strokeWidth="2"/>
    
    {/* Middle cylinder */}
    <rect x="12" y="24" width="40" height="8" fill="#336791"/>
    <ellipse cx="32" cy="32" rx="20" ry="8" fill="#4a7ba7" stroke="#000" strokeWidth="2"/>
    
    {/* Bottom cylinder */}
    <rect x="12" y="32" width="40" height="8" fill="#336791"/>
    <ellipse cx="32" cy="40" rx="20" ry="8" fill="#4a7ba7" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const RubyIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Diamond/gem shape */}
    <path d="M32 8 L48 24 L32 56 L16 24 Z" fill="#cc342d" stroke="#000" strokeWidth="2"/>
    {/* Facets */}
    <path d="M32 8 L32 56 L16 24 Z" fill="#e85d4e"/>
    <path d="M32 8 L48 24 L32 32 Z" fill="#ff8f82"/>
    {/* Highlight */}
    <circle cx="28" cy="18" r="3" fill="#ffb3aa" opacity="0.8"/>
    
    {/* Sparkle */}
    <circle cx="52" cy="16" r="2" fill="#fff"/>
    <rect x="50" y="14" width="4" height="1" fill="#fff"/>
    <rect x="51" y="13" width="1" height="4" fill="#fff"/>
  </svg>
);

// ============================================
// DEVELOPMENT TOOLS
// ============================================

export const GitIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Git branching diagram */}
    <circle cx="32" cy="12" r="6" fill="#f05032" stroke="#000" strokeWidth="2"/>
    
    {/* Main branch line */}
    <line x1="32" y1="18" x2="32" y2="32" stroke="#f05032" strokeWidth="3"/>
    
    {/* Branch splits */}
    <circle cx="20" cy="32" r="6" fill="#f05032" stroke="#000" strokeWidth="2"/>
    <circle cx="44" cy="32" r="6" fill="#f05032" stroke="#000" strokeWidth="2"/>
    
    {/* Branch lines */}
    <line x1="32" y1="24" x2="20" y2="32" stroke="#f05032" strokeWidth="3"/>
    <line x1="32" y1="24" x2="44" y2="32" stroke="#f05032" strokeWidth="3"/>
    
    {/* Continue branches */}
    <line x1="20" y1="38" x2="20" y2="46" stroke="#f05032" strokeWidth="3"/>
    <line x1="44" y1="38" x2="44" y2="46" stroke="#f05032" strokeWidth="3"/>
    
    <circle cx="20" cy="52" r="6" fill="#f05032" stroke="#000" strokeWidth="2"/>
    <circle cx="44" cy="52" r="6" fill="#f05032" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const DockerIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Docker whale */}
    {/* Body */}
    <ellipse cx="32" cy="38" rx="24" ry="16" fill="#2496ed" stroke="#000" strokeWidth="2"/>
    
    {/* Containers on back */}
    <rect x="16" y="28" width="8" height="10" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    <rect x="26" y="28" width="8" height="10" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    <rect x="36" y="28" width="8" height="10" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Tail */}
    <path d="M8 34 Q4 34 4 38 Q4 42 8 42" fill="#2496ed" stroke="#000" strokeWidth="2"/>
    
    {/* Water spout */}
    <path d="M46 20 Q48 16 50 20" stroke="#00d9ff" strokeWidth="2" fill="none"/>
    <path d="M50 18 Q52 14 54 18" stroke="#00d9ff" strokeWidth="2" fill="none"/>
    <path d="M54 20 Q56 16 58 20" stroke="#00d9ff" strokeWidth="2" fill="none"/>
    
    {/* Eye */}
    <circle cx="24" cy="36" r="2" fill="#fff"/>
  </svg>
);

export const JenkinsIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Butler face */}
    <circle cx="32" cy="32" r="24" fill="#d33833" stroke="#000" strokeWidth="2"/>
    
    {/* Eyes */}
    <circle cx="24" cy="28" r="3" fill="#fff" stroke="#000" strokeWidth="2"/>
    <circle cx="40" cy="28" r="3" fill="#fff" stroke="#000" strokeWidth="2"/>
    <circle cx="24" cy="28" r="1.5" fill="#000"/>
    <circle cx="40" cy="28" r="1.5" fill="#000"/>
    
    {/* Mustache */}
    <path d="M18 38 Q24 36 32 38 Q40 36 46 38" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M18 38 Q18 42 20 44" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M46 38 Q46 42 44 44" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Bow tie */}
    <path d="M26 48 L20 52 L26 56 L32 52 L38 56 L44 52 L38 48 L32 52 Z" fill="#fff" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const NpmIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Red package box */}
    <rect x="8" y="16" width="48" height="32" fill="#cb3837" stroke="#000" strokeWidth="2"/>
    
    {/* npm text */}
    <text x="32" y="38" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">npm</text>
    
    {/* Box details - tape */}
    <rect x="8" y="30" width="48" height="4" fill="#a02724"/>
    <line x1="32" y1="16" x2="32" y2="48" stroke="#a02724" strokeWidth="4"/>
  </svg>
);

export const TableauIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bar chart visualization */}
    <rect x="10" y="40" width="8" height="16" fill="#e97627" stroke="#000" strokeWidth="2"/>
    <rect x="22" y="32" width="8" height="24" fill="#ff9f4a" stroke="#000" strokeWidth="2"/>
    <rect x="34" y="20" width="8" height="36" fill="#ffb366" stroke="#000" strokeWidth="2"/>
    <rect x="46" y="12" width="8" height="44" fill="#ffc885" stroke="#000" strokeWidth="2"/>
    
    {/* Baseline */}
    <line x1="8" y1="56" x2="56" y2="56" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const N8nIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Workflow automation - connected nodes */}
    <circle cx="16" cy="32" r="8" fill="#ff6d5a" stroke="#000" strokeWidth="2"/>
    <circle cx="32" cy="16" r="8" fill="#ff6d5a" stroke="#000" strokeWidth="2"/>
    <circle cx="32" cy="48" r="8" fill="#ff6d5a" stroke="#000" strokeWidth="2"/>
    <circle cx="48" cy="32" r="8" fill="#ff6d5a" stroke="#000" strokeWidth="2"/>
    
    {/* Connection lines */}
    <line x1="22" y1="28" x2="28" y2="20" stroke="#ff006e" strokeWidth="3"/>
    <line x1="22" y1="36" x2="28" y2="44" stroke="#ff006e" strokeWidth="3"/>
    <line x1="36" y1="20" x2="42" y2="28" stroke="#ff006e" strokeWidth="3"/>
    <line x1="36" y1="44" x2="42" y2="36" stroke="#ff006e" strokeWidth="3"/>
  </svg>
);

// ============================================
// FRAMEWORKS
// ============================================

export const ReactIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* React atom symbol */}
    {/* Nucleus */}
    <circle cx="32" cy="32" r="4" fill="#61dafb" stroke="#000" strokeWidth="2"/>
    
    {/* Electron orbits */}
    <ellipse cx="32" cy="32" rx="24" ry="10" fill="none" stroke="#61dafb" strokeWidth="2"/>
    <ellipse cx="32" cy="32" rx="24" ry="10" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 32 32)"/>
    <ellipse cx="32" cy="32" rx="24" ry="10" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 32 32)"/>
    
    {/* Electrons */}
    <circle cx="56" cy="32" r="3" fill="#61dafb" stroke="#000" strokeWidth="2"/>
    <circle cx="44" cy="49" r="3" fill="#61dafb" stroke="#000" strokeWidth="2"/>
    <circle cx="20" cy="49" r="3" fill="#61dafb" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const FlaskIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Laboratory flask */}
    {/* Neck */}
    <rect x="28" y="8" width="8" height="12" fill="#808080" stroke="#000" strokeWidth="2"/>
    
    {/* Flask body */}
    <path d="M28 20 L20 40 L20 52 Q20 56 24 56 L40 56 Q44 56 44 52 L44 40 L36 20 Z" fill="#e0e0e0" stroke="#000" strokeWidth="2"/>
    
    {/* Liquid inside */}
    <path d="M22 42 L22 52 Q22 54 24 54 L40 54 Q42 54 42 52 L42 42 Z" fill="#00d9ff" opacity="0.7"/>
    
    {/* Bubbles */}
    <circle cx="28" cy="48" r="2" fill="#fff" opacity="0.6"/>
    <circle cx="36" cy="45" r="2" fill="#fff" opacity="0.6"/>
    
    {/* Top opening */}
    <ellipse cx="32" cy="8" rx="4" ry="2" fill="#606060" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const AWSIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cloud shape */}
    <ellipse cx="24" cy="32" rx="12" ry="10" fill="#ff9900" stroke="#000" strokeWidth="2"/>
    <ellipse cx="40" cy="32" rx="12" ry="10" fill="#ff9900" stroke="#000" strokeWidth="2"/>
    <ellipse cx="32" cy="24" rx="10" ry="8" fill="#ff9900" stroke="#000" strokeWidth="2"/>
    <rect x="12" y="28" width="40" height="12" fill="#ff9900"/>
    
    {/* AWS text */}
    <text x="32" y="36" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#fff" textAnchor="middle">AWS</text>
  </svg>
);

export const LinuxIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Tux penguin */}
    {/* Head */}
    <ellipse cx="32" cy="24" rx="12" ry="14" fill="#000" stroke="#000" strokeWidth="2"/>
    
    {/* White belly */}
    <ellipse cx="32" cy="40" rx="10" ry="12" fill="#fff" stroke="#000" strokeWidth="2"/>
    
    {/* Eyes */}
    <ellipse cx="28" cy="22" rx="3" ry="4" fill="#fff" stroke="#000" strokeWidth="1"/>
    <ellipse cx="36" cy="22" rx="3" ry="4" fill="#fff" stroke="#000" strokeWidth="1"/>
    <circle cx="28" cy="23" r="1.5" fill="#000"/>
    <circle cx="36" cy="23" r="1.5" fill="#000"/>
    
    {/* Beak */}
    <path d="M30 26 L32 28 L34 26" fill="#ffa500" stroke="#000" strokeWidth="1"/>
    
    {/* Feet */}
    <ellipse cx="26" cy="54" rx="4" ry="3" fill="#ffa500" stroke="#000" strokeWidth="2"/>
    <ellipse cx="38" cy="54" rx="4" ry="3" fill="#ffa500" stroke="#000" strokeWidth="2"/>
    
    {/* Wings */}
    <ellipse cx="20" cy="36" rx="4" ry="8" fill="#000" stroke="#000" strokeWidth="1"/>
    <ellipse cx="44" cy="36" rx="4" ry="8" fill="#000" stroke="#000" strokeWidth="1"/>
  </svg>
);

// ============================================
// DESKTOP & FILE ICONS
// ============================================

export const FolderClosedIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Folder tab */}
    <path d="M8 16 L8 12 L28 12 L32 16 Z" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    
    {/* Folder body */}
    <rect x="8" y="16" width="48" height="36" rx="2" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    
    {/* Shading */}
    <rect x="8" y="16" width="48" height="4" fill="#e5c200"/>
    
    {/* Highlight */}
    <path d="M12 20 L12 48 Q12 50 14 50 L16 50" stroke="#fff" strokeWidth="2" opacity="0.4"/>
  </svg>
);

export const FolderOpenIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Open folder tab */}
    <path d="M8 16 L8 12 L28 12 L32 16 L48 16 L52 20" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    
    {/* Open folder body */}
    <path d="M8 20 L8 52 L52 52 L56 20 Z" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    
    {/* Contents visible */}
    <rect x="12" y="26" width="20" height="3" fill="#00d9ff" opacity="0.6"/>
    <rect x="12" y="32" width="16" height="3" fill="#ff006e" opacity="0.6"/>
    <rect x="12" y="38" width="24" height="3" fill="#a855f7" opacity="0.6"/>
  </svg>
);

export const DocumentIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Page */}
    <rect x="12" y="8" width="36" height="48" fill="#fff" stroke="#000" strokeWidth="2"/>
    
    {/* Folded corner */}
    <path d="M48 8 L36 8 L48 20 Z" fill="#e0e0e0" stroke="#000" strokeWidth="2"/>
    <path d="M36 8 L36 20 L48 20" fill="none" stroke="#000" strokeWidth="2"/>
    
    {/* Text lines */}
    <line x1="18" y1="24" x2="42" y2="24" stroke="#808080" strokeWidth="2"/>
    <line x1="18" y1="30" x2="38" y2="30" stroke="#808080" strokeWidth="2"/>
    <line x1="18" y1="36" x2="42" y2="36" stroke="#808080" strokeWidth="2"/>
    <line x1="18" y1="42" x2="36" y2="42" stroke="#808080" strokeWidth="2"/>
    <line x1="18" y1="48" x2="40" y2="48" stroke="#808080" strokeWidth="2"/>
  </svg>
);

// ============================================
// CONTACT ICONS
// ============================================

export const EmailIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Envelope */}
    <rect x="8" y="16" width="48" height="32" fill="#fff" stroke="#000" strokeWidth="2"/>
    
    {/* Envelope flap closed */}
    <path d="M8 16 L32 36 L56 16 Z" fill="#ff006e" stroke="#000" strokeWidth="2"/>
    
    {/* Flap lines */}
    <line x1="8" y1="16" x2="32" y2="36" stroke="#000" strokeWidth="2"/>
    <line x1="56" y1="16" x2="32" y2="36" stroke="#000" strokeWidth="2"/>
    
    {/* Seal/stamp */}
    <circle cx="44" cy="32" r="4" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const LinkedInIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* LinkedIn blue square */}
    <rect x="8" y="8" width="48" height="48" rx="4" fill="#0a66c2" stroke="#000" strokeWidth="2"/>
    
    {/* "in" text */}
    <text x="32" y="42" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="#fff" textAnchor="middle">in</text>
  </svg>
);

export const GitHubIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Octocat simplified */}
    <circle cx="32" cy="28" r="20" fill="#24292e" stroke="#000" strokeWidth="2"/>
    
    {/* Eyes */}
    <circle cx="24" cy="26" r="4" fill="#fff"/>
    <circle cx="40" cy="26" r="4" fill="#fff"/>
    
    {/* Smile */}
    <path d="M22 34 Q32 38 42 34" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Ears */}
    <circle cx="14" cy="18" r="4" fill="#24292e" stroke="#000" strokeWidth="2"/>
    <circle cx="50" cy="18" r="4" fill="#24292e" stroke="#000" strokeWidth="2"/>
    
    {/* Tentacles */}
    <rect x="20" y="46" width="4" height="10" rx="2" fill="#24292e" stroke="#000" strokeWidth="2"/>
    <rect x="30" y="46" width="4" height="10" rx="2" fill="#24292e" stroke="#000" strokeWidth="2"/>
    <rect x="40" y="46" width="4" height="10" rx="2" fill="#24292e" stroke="#000" strokeWidth="2"/>
  </svg>
);

export const PhoneIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Retro rotary phone */}
    {/* Handset */}
    <path d="M12 16 Q10 16 10 18 L10 22 Q10 24 12 24 L20 24 Q22 24 22 22 L22 18 Q22 16 20 16 Z" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Base */}
    <ellipse cx="32" cy="44" rx="20" ry="12" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Dial */}
    <circle cx="32" cy="40" r="10" fill="#808080" stroke="#000" strokeWidth="2"/>
    <circle cx="32" cy="40" r="6" fill="#fff" stroke="#000" strokeWidth="1"/>
    
    {/* Dial holes */}
    <circle cx="32" cy="34" r="1.5" fill="#808080"/>
    <circle cx="37" cy="37" r="1.5" fill="#808080"/>
    <circle cx="37" cy="43" r="1.5" fill="#808080"/>
    
    {/* Cord */}
    <path d="M18 20 Q16 28 18 36 L24 40" stroke="#808080" strokeWidth="2" fill="none"/>
  </svg>
);

// ============================================
// STAT CARD ICONS (Keeping existing but refining)
// ============================================

export const TrophyIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Trophy cup */}
    <path d="M24 16 L24 12 L40 12 L40 16 L44 20 L44 28 L40 32 L24 32 L20 28 L20 20 Z" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    
    {/* Handles */}
    <path d="M20 18 L16 18 Q12 18 12 22 Q12 26 16 26 L20 26" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    <path d="M44 18 L48 18 Q52 18 52 22 Q52 26 48 26 L44 26" fill="#ffd60a" stroke="#000" strokeWidth="2"/>
    
    {/* Stem */}
    <rect x="28" y="32" width="8" height="8" fill="#b8860b" stroke="#000" strokeWidth="2"/>
    
    {/* Base */}
    <rect x="20" y="40" width="24" height="8" rx="2" fill="#b8860b" stroke="#000" strokeWidth="2"/>
    <rect x="16" y="48" width="32" height="4" rx="2" fill="#b8860b" stroke="#000" strokeWidth="2"/>
    
    {/* Shine */}
    <circle cx="28" cy="20" r="2" fill="#ffed4e" opacity="0.8"/>
  </svg>
);

export const CoffeeIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Steam wisps */}
    <path d="M24 10 Q24 6 26 6" stroke="#888" strokeWidth="2" fill="none" opacity="0.6" className="steam-1"/>
    <path d="M32 8 Q32 4 34 4" stroke="#888" strokeWidth="2" fill="none" opacity="0.6" className="steam-2"/>
    <path d="M40 10 Q40 6 42 6" stroke="#888" strokeWidth="2" fill="none" opacity="0.6" className="steam-3"/>
    
    {/* Cup rim */}
    <ellipse cx="32" cy="20" rx="14" ry="3" fill="#8B4513" stroke="#000" strokeWidth="2"/>
    
    {/* Cup body */}
    <path d="M18 20 L20 46 Q20 50 24 50 L40 50 Q44 50 44 46 L46 20 Z" fill="#A0522D" stroke="#000" strokeWidth="2"/>
    
    {/* Coffee inside */}
    <ellipse cx="32" cy="24" rx="12" ry="2" fill="#3e2723"/>
    <path d="M20 24 L22 44 Q22 46 24 46 L40 46 Q42 46 42 44 L44 24 Z" fill="#3e2723" opacity="0.9"/>
    
    {/* Handle */}
    <path d="M46 26 L50 26 Q54 26 54 32 Q54 38 50 38 L46 38" stroke="#8B4513" strokeWidth="3" fill="none"/>
    
    {/* Saucer */}
    <ellipse cx="32" cy="52" rx="18" ry="4" fill="#654321" stroke="#000" strokeWidth="2"/>
    
    {/* Highlight */}
    <path d="M24 26 L24 42 Q24 44 26 44" stroke="#DEB887" strokeWidth="2" opacity="0.4"/>
  </svg>
);

export const FolderGridIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Grid of squares representing multiple projects */}
    <rect x="8" y="8" width="16" height="16" fill="#00d9ff" stroke="#000" strokeWidth="2" rx="2"/>
    <rect x="28" y="8" width="16" height="16" fill="#00d9ff" stroke="#000" strokeWidth="2" rx="2"/>
    <rect x="48" y="8" width="8" height="16" fill="#00d9ff" stroke="#000" strokeWidth="2" rx="2"/>
    
    <rect x="8" y="28" width="16" height="16" fill="#00b4d8" stroke="#000" strokeWidth="2" rx="2"/>
    <rect x="28" y="28" width="16" height="16" fill="#00b4d8" stroke="#000" strokeWidth="2" rx="2"/>
    <rect x="48" y="28" width="8" height="16" fill="#00b4d8" stroke="#000" strokeWidth="2" rx="2"/>
    
    <rect x="8" y="48" width="16" height="8" fill="#0096c7" stroke="#000" strokeWidth="2" rx="2"/>
    <rect x="28" y="48" width="16" height="8" fill="#0096c7" stroke="#000" strokeWidth="2" rx="2"/>
    <rect x="48" y="48" width="8" height="8" fill="#0096c7" stroke="#000" strokeWidth="2" rx="2"/>
  </svg>
);

// ============================================
// INTEREST ICONS
// ============================================

export const GameControllerIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Controller body */}
    <path d="M12 24 Q8 24 8 28 L8 36 Q8 40 12 40 L20 40 L24 36 L40 36 L44 40 L52 40 Q56 40 56 36 L56 28 Q56 24 52 24 Z" fill="#808080" stroke="#000" strokeWidth="2"/>
    
    {/* D-pad */}
    <rect x="16" y="28" width="4" height="4" fill="#606060" stroke="#000" strokeWidth="1"/>
    <rect x="14" y="30" width="8" height="2" fill="#606060"/>
    <rect x="17" y="27" width="2" height="8" fill="#606060"/>
    
    {/* Buttons */}
    <circle cx="44" cy="30" r="3" fill="#ff006e" stroke="#000" strokeWidth="1"/>
    <circle cx="48" cy="34" r="3" fill="#00d9ff" stroke="#000" strokeWidth="1"/>
    <circle cx="40" cy="34" r="3" fill="#ffd60a" stroke="#000" strokeWidth="1"/>
    <circle cx="44" cy="38" r="3" fill="#a855f7" stroke="#000" strokeWidth="1"/>
  </svg>
);

export const AnimeIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ramen bowl */}
    <ellipse cx="32" cy="44" rx="24" ry="8" fill="#fff" stroke="#000" strokeWidth="2"/>
    <path d="M8 44 L8 48 Q8 52 12 52 L52 52 Q56 52 56 48 L56 44 Z" fill="#fff" stroke="#000" strokeWidth="2"/>
    
    {/* Soup/broth */}
    <ellipse cx="32" cy="40" rx="22" ry="6" fill="#ffa500" opacity="0.7"/>
    
    {/* Noodles */}
    <path d="M16 38 Q20 34 24 38 Q28 42 32 38 Q36 34 40 38 Q44 42 48 38" stroke="#ffd60a" strokeWidth="2" fill="none"/>
    <path d="M18 40 Q22 36 26 40 Q30 44 34 40 Q38 36 42 40 Q46 44 50 40" stroke="#ffd60a" strokeWidth="2" fill="none"/>
    
    {/* Chopsticks */}
    <line x1="12" y1="16" x2="18" y2="38" stroke="#8B4513" strokeWidth="2"/>
    <line x1="16" y1="16" x2="22" y2="38" stroke="#8B4513" strokeWidth="2"/>
    
    {/* Steam */}
    <path d="M24 24 Q24 20 26 20" stroke="#888" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M32 22 Q32 18 34 18" stroke="#888" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M40 24 Q40 20 42 20" stroke="#888" strokeWidth="2" fill="none" opacity="0.5"/>
    
    {/* Naruto fish cake */}
    <circle cx="32" cy="36" r="4" fill="#fff" stroke="#000" strokeWidth="1"/>
    <path d="M32 32 Q34 34 32 36 Q30 34 32 32" fill="#ff006e"/>
  </svg>
);

export const KeyboardIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Keyboard case */}
    <rect x="4" y="20" width="56" height="28" rx="2" fill="#808080" stroke="#000" strokeWidth="2"/>
    
    {/* Keycaps - top row */}
    <rect x="8" y="24" width="6" height="6" rx="1" fill="#ff006e" stroke="#000" strokeWidth="1"/>
    <rect x="16" y="24" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="24" y="24" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="32" y="24" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="40" y="24" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="48" y="24" width="6" height="6" rx="1" fill="#00d9ff" stroke="#000" strokeWidth="1"/>
    
    {/* Middle row */}
    <rect x="8" y="32" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="16" y="32" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="24" y="32" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="32" y="32" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="40" y="32" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="48" y="32" width="6" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    
    {/* Bottom row */}
    <rect x="8" y="40" width="10" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="20" y="40" width="24" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
    <rect x="46" y="40" width="8" height="6" rx="1" fill="#fff" stroke="#000" strokeWidth="1"/>
  </svg>
);

export const AIRobotIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Robot head */}
    <rect x="16" y="20" width="32" height="28" rx="4" fill="#a855f7" stroke="#000" strokeWidth="2"/>
    
    {/* Antenna */}
    <line x1="32" y1="12" x2="32" y2="20" stroke="#000" strokeWidth="2"/>
    <circle cx="32" cy="10" r="3" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Eyes - LED style */}
    <rect x="22" y="28" width="8" height="6" rx="2" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    <rect x="34" y="28" width="8" height="6" rx="2" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Mouth - display */}
    <rect x="20" y="38" width="24" height="6" rx="2" fill="#000" stroke="#000" strokeWidth="2"/>
    <line x1="24" y1="38" x2="26" y2="44" stroke="#00d9ff" strokeWidth="1"/>
    <line x1="28" y1="38" x2="30" y2="44" stroke="#00d9ff" strokeWidth="1"/>
    <line x1="32" y1="38" x2="34" y2="44" stroke="#00d9ff" strokeWidth="1"/>
    <line x1="36" y1="38" x2="38" y2="44" stroke="#00d9ff" strokeWidth="1"/>
    
    {/* Body segments */}
    <rect x="20" y="48" width="24" height="8" fill="#9333ea" stroke="#000" strokeWidth="2"/>
    
    {/* Arms */}
    <rect x="10" y="50" width="6" height="12" rx="2" fill="#a855f7" stroke="#000" strokeWidth="2"/>
    <rect x="48" y="50" width="6" height="12" rx="2" fill="#a855f7" stroke="#000" strokeWidth="2"/>
  </svg>
);

// ============================================
// ACTION ICONS
// ============================================

export const DownloadIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Down arrow */}
    <rect x="28" y="8" width="8" height="28" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    <path d="M20 28 L32 44 L44 28 Z" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Tray/box */}
    <rect x="12" y="44" width="40" height="12" rx="2" fill="#808080" stroke="#000" strokeWidth="2"/>
    <rect x="14" y="46" width="36" height="8" fill="#a0a0a0"/>
  </svg>
);

export const ExternalLinkIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Box */}
    <rect x="8" y="16" width="40" height="40" rx="2" fill="#00d9ff" stroke="#000" strokeWidth="2"/>
    
    {/* Arrow escaping */}
    <line x1="36" y1="28" x2="52" y2="12" stroke="#000" strokeWidth="3"/>
    <path d="M44 8 L56 8 L56 20" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="square"/>
    
    {/* Arrow head */}
    <path d="M48 12 L56 12 L56 20" fill="#000"/>
  </svg>
);

export const CheckmarkIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Checkmark */}
    <path d="M12 32 L26 46 L52 14" stroke="#00a86b" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 32 L26 46 L52 14" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ============================================
// ADDITIONAL TECH ICONS
// ============================================

export const NodeJSIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Node.js hexagon logo */}
    <path d="M32 8 L52 20 L52 44 L32 56 L12 44 L12 20 Z" fill="#68a063" stroke="#000" strokeWidth="2"/>
    <path d="M32 8 L52 20 L52 44 L32 56 Z" fill="#5a8f52"/>
    
    {/* Highlight */}
    <path d="M32 12 L48 22 L48 42 L32 52" stroke="#7db76b" strokeWidth="2" opacity="0.5"/>
  </svg>
);

export const FastAPIIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Lightning bolt for "Fast" */}
    <path d="M36 8 L24 32 L32 32 L28 56 L44 28 L36 28 Z" fill="#009688" stroke="#000" strokeWidth="2"/>
    
    {/* API text/badge */}
    <rect x="8" y="48" width="20" height="8" rx="2" fill="#009688" stroke="#000" strokeWidth="2"/>
    <text x="18" y="54" fontFamily="monospace" fontSize="6" fontWeight="bold" fill="#fff" textAnchor="middle">API</text>
  </svg>
);

export const DialogFlowIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Chat bubble */}
    <rect x="8" y="16" width="40" height="28" rx="6" fill="#ff9800" stroke="#000" strokeWidth="2"/>
    <path d="M24 44 L20 52 L28 44 Z" fill="#ff9800" stroke="#000" strokeWidth="2"/>
    
    {/* Thought dots */}
    <circle cx="18" cy="28" r="2" fill="#fff"/>
    <circle cx="28" cy="28" r="2" fill="#fff"/>
    <circle cx="38" cy="28" r="2" fill="#fff"/>
    
    {/* Brain/AI symbol */}
    <circle cx="48" cy="24" r="8" fill="#ff9800" stroke="#000" strokeWidth="2"/>
    <path d="M44 24 L48 20 L52 24 L48 28 Z" fill="#fff" stroke="#000" strokeWidth="1"/>
  </svg>
);

export const FirebaseIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Flame shape */}
    <path d="M32 8 L40 24 L36 32 L40 40 L32 56 L24 40 L28 32 L24 24 Z" fill="#ffca28" stroke="#000" strokeWidth="2"/>
    <path d="M32 8 L40 24 L36 32 L40 40 L32 56 Z" fill="#ffa000"/>
    
    {/* Inner flame */}
    <path d="M32 16 L36 28 L32 48 L28 28 Z" fill="#fff" opacity="0.6"/>
  </svg>
);

export const ExpressIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Train/locomotive for Express */}
    <rect x="12" y="28" width="40" height="20" rx="2" fill="#000" stroke="#000" strokeWidth="2"/>
    
    {/* Chimney */}
    <rect x="18" y="20" width="8" height="8" fill="#000" stroke="#000" strokeWidth="2"/>
    
    {/* Smoke */}
    <circle cx="22" cy="14" r="3" fill="#808080" opacity="0.6"/>
    <circle cx="28" cy="12" r="2" fill="#808080" opacity="0.5"/>
    
    {/* Window */}
    <rect x="36" y="32" width="12" height="8" fill="#00d9ff" stroke="#000" strokeWidth="1"/>
    
    {/* Wheels */}
    <circle cx="20" cy="48" r="6" fill="#606060" stroke="#000" strokeWidth="2"/>
    <circle cx="44" cy="48" r="6" fill="#606060" stroke="#000" strokeWidth="2"/>
    <circle cx="20" cy="48" r="3" fill="#808080"/>
    <circle cx="44" cy="48" r="3" fill="#808080"/>
    
    {/* "E" on side */}
    <text x="24" y="40" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#fff">E</text>
  </svg>
);

export const PostgreSQLIcon = ({ size = 64, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Elephant for Postgres */}
    <ellipse cx="32" cy="36" rx="20" ry="16" fill="#336791" stroke="#000" strokeWidth="2"/>
    
    {/* Head */}
    <circle cx="24" cy="28" r="10" fill="#336791" stroke="#000" strokeWidth="2"/>
    
    {/* Trunk */}
    <path d="M18 32 Q14 34 14 38 Q14 42 16 44" stroke="#336791" strokeWidth="4" fill="none"/>
    
    {/* Ear */}
    <ellipse cx="20" cy="24" rx="6" ry="8" fill="#4a7ba7" stroke="#000" strokeWidth="2"/>
    
    {/* Eye */}
    <circle cx="24" cy="26" r="2" fill="#fff"/>
    
    {/* Legs */}
    <rect x="20" y="50" width="4" height="8" fill="#336791" stroke="#000" strokeWidth="2"/>
    <rect x="30" y="50" width="4" height="8" fill="#336791" stroke="#000" strokeWidth="2"/>
    <rect x="40" y="50" width="4" height="8" fill="#336791" stroke="#000" strokeWidth="2"/>
  </svg>
);

// Export all icons as a collection
export const PixelIcons = {
  // Languages
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  SQL: SQLIcon,
  Ruby: RubyIcon,
  
  // Tools
  Git: GitIcon,
  Docker: DockerIcon,
  Jenkins: JenkinsIcon,
  Npm: NpmIcon,
  Tableau: TableauIcon,
  N8n: N8nIcon,
  
  // Frameworks
  React: ReactIcon,
  Flask: FlaskIcon,
  AWS: AWSIcon,
  Linux: LinuxIcon,
  NodeJS: NodeJSIcon,
  FastAPI: FastAPIIcon,
  DialogFlow: DialogFlowIcon,
  Firebase: FirebaseIcon,
  Express: ExpressIcon,
  PostgreSQL: PostgreSQLIcon,
  
  // Desktop
  FolderClosed: FolderClosedIcon,
  FolderOpen: FolderOpenIcon,
  Document: DocumentIcon,
  
  // Contact
  Email: EmailIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Phone: PhoneIcon,
  
  // Stats
  Trophy: TrophyIcon,
  Coffee: CoffeeIcon,
  FolderGrid: FolderGridIcon,
  
  // Interests
  GameController: GameControllerIcon,
  Anime: AnimeIcon,
  Keyboard: KeyboardIcon,
  AIRobot: AIRobotIcon,
  
  // Actions
  Download: DownloadIcon,
  ExternalLink: ExternalLinkIcon,
  Checkmark: CheckmarkIcon,
};
