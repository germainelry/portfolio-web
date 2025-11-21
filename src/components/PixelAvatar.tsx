import React from 'react';
// @ts-ignore - Vite handles image imports
import girlInTechSvg from '../public/profile/girl-in-tech.svg';

interface PixelAvatarProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  className?: string;
}

export default function PixelAvatar({ size = 'medium', className = '' }: PixelAvatarProps) {
  const sizeMap = {
    small: 'w-8 h-8',      // 32px
    medium: 'w-24 h-24',   // 96px
    large: 'w-45 h-40',    // 160px
    xlarge: 'w-52 h-52',   // 208px
    xxlarge: 'w-64 h-64'   // 256px
  };

  // If className contains width/height classes, use className only; otherwise combine with size
  const hasSizeInClassName = className && /(w-\d+|h-\d+|w-\[|h-\[)/.test(className);
  const sizeClass = hasSizeInClassName ? '' : sizeMap[size];

  return (
    <div className={`${sizeClass} ${className} relative`}>
      {/* Tech Girlie character with brown hair, pink dress, headphones, laptop, and plants */}
      <img 
        src={girlInTechSvg}
        alt="Germaine's Avatar - Tech Girlie with cute happy face and long hair"
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}