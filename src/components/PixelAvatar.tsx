interface PixelAvatarProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function PixelAvatar({ size = 'medium', className = '' }: PixelAvatarProps) {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-24 h-24',
    large: 'w-40 h-40'
  };

  return (
    <div className={`${sizeMap[size]} ${className} relative`}>
      {/* Tech Girlie character with brown hair, pink dress, headphones, laptop, and plants */}
      <img 
        src="data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cstyle%3E .pixel %7B shape-rendering: crispEdges; image-rendering: pixelated; %7D %3C/style%3E%3C/defs%3E%3C!-- Background/Desk --%3E%3Crect width='160' height='160' fill='%23f0f0f0' opacity='0'/%3E%3C!-- Desk surface --%3E%3Crect x='20' y='100' width='120' height='50' fill='%23d4a574' class='pixel'/%3E%3C!-- Left plant pot --%3E%3Crect x='12' y='70' width='16' height='20' fill='%23d97e5c' class='pixel'/%3E%3Crect x='14' y='65' width='12' height='8' fill='%2300a86b' class='pixel'/%3E%3Crect x='16' y='58' width='8' height='8' fill='%2300d97e' class='pixel'/%3E%3C!-- Right plant pot --%3E%3Crect x='132' y='70' width='16' height='20' fill='%23d97e5c' class='pixel'/%3E%3Crect x='134' y='65' width='12' height='8' fill='%2300a86b' class='pixel'/%3E%3Crect x='136' y='58' width='8' height='8' fill='%2300d97e' class='pixel'/%3E%3C!-- Brown hair --%3E%3Crect x='48' y='20' width='64' height='8' fill='%23654321' class='pixel'/%3E%3Crect x='40' y='28' width='80' height='32' fill='%238B4513' class='pixel'/%3E%3Crect x='44' y='32' width='72' height='24' fill='%23654321' class='pixel'/%3E%3C!-- Face --%3E%3Crect x='56' y='40' width='48' height='48' fill='%23FFD1B3' class='pixel'/%3E%3C!-- Eyes --%3E%3Crect x='66' y='54' width='8' height='8' fill='white' class='pixel'/%3E%3Crect x='86' y='54' width='8' height='8' fill='white' class='pixel'/%3E%3Crect x='68' y='56' width='4' height='4' fill='%231a1a1a' class='pixel'/%3E%3Crect x='88' y='56' width='4' height='4' fill='%231a1a1a' class='pixel'/%3E%3C!-- Smile --%3E%3Crect x='70' y='70' width='20' height='4' fill='%23ff9ebb' class='pixel'/%3E%3Crect x='68' y='68' width='2' height='2' fill='%231a1a1a' class='pixel'/%3E%3Crect x='90' y='68' width='2' height='2' fill='%231a1a1a' class='pixel'/%3E%3C!-- Headphones --%3E%3Crect x='32' y='42' width='12' height='24' fill='white' class='pixel'/%3E%3Crect x='116' y='42' width='12' height='24' fill='white' class='pixel'/%3E%3Crect x='36' y='46' width='8' height='16' fill='%23ff9ebb' class='pixel'/%3E%3Crect x='116' y='46' width='8' height='16' fill='%23ff9ebb' class='pixel'/%3E%3C!-- Headphone band --%3E%3Crect x='44' y='36' width='72' height='6' fill='white' class='pixel'/%3E%3C!-- Pink dress/body --%3E%3Crect x='48' y='88' width='64' height='48' fill='%23ff9ebb' class='pixel'/%3E%3Crect x='52' y='92' width='56' height='40' fill='%23ffb3d9' class='pixel'/%3E%3C!-- Laptop on desk --%3E%3Crect x='60' y='110' width='40' height='24' fill='%23c0c0c0' class='pixel'/%3E%3Crect x='62' y='112' width='36' height='18' fill='%23e0e0e0' class='pixel'/%3E%3Crect x='64' y='114' width='32' height='14' fill='%2300d9ff' class='pixel' opacity='0.3'/%3E%3C!-- Keyboard --%3E%3Crect x='58' y='134' width='44' height='8' fill='%23ffffff' class='pixel'/%3E%3Crect x='60' y='136' width='40' height='4' fill='%23ff9ebb' class='pixel' opacity='0.6'/%3E%3C!-- Coffee cup --%3E%3Crect x='110' y='118' width='12' height='16' fill='%238B4513' class='pixel'/%3E%3Crect x='112' y='120' width='8' height='12' fill='%23a0522d' class='pixel'/%3E%3C!-- Steam --%3E%3Crect x='114' y='112' width='4' height='6' fill='%23f5f5f5' class='pixel' opacity='0.6'/%3E%3Crect x='116' y='108' width='2' height='4' fill='%23f5f5f5' class='pixel' opacity='0.4'/%3E%3C!-- Small desk plant --%3E%3Crect x='32' y='120' width='12' height='14' fill='%23d97e5c' class='pixel'/%3E%3Crect x='34' y='116' width='8' height='6' fill='%2300a86b' class='pixel'/%3E%3C/svg%3E"
        alt="Germaine's Avatar - Tech Girlie"
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}