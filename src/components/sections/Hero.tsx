import Window from '../Window';
import MacButton from '../MacButton';
import PixelAvatar from '../PixelAvatar';
import StatCard from '../StatCard';
import Tooltip from '../Tooltip';
import { TrophyIcon, CoffeeIcon } from '../StatIcons';
import { ClockLightningIcon } from '../icons/PixelIcons';
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Automation • AI • DevOps';
  
  // Typing animation
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60); // 60ms per character
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Cursor blink animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Blink every 500ms
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Window title="GERMAINE.EXE" width="max-w-xl" className="animate-fadeIn">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Pixel Avatar */}
        <div className="relative group">
          <PixelAvatar size="large" />
          {/* Sparkle effects around tech girlie */}
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute -top-1 -left-2 w-2 h-2 bg-cyan-300 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -bottom-2 -right-1 w-3 h-3 bg-pink-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-8 -left-3 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Speech bubble - "Hello, World!" */}
          <div className="absolute -right-35 top-8 hidden md:block animate-bounce-subtle">
            <div className="bg-white border-2 border-retro-charcoal px-4 py-2 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="font-mono text-sm whitespace-nowrap text-retro-charcoal">Hello, World!</span>
              {/* Speech bubble tail pointing left */}
              <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-retro-charcoal" />
              <div className="absolute left-0 top-1/2 -translate-x-[calc(100%-2px)] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-white" />
            </div>
          </div>
        </div>

        {/* Name and Title - Updated Typography */}
        <div>
          <h1 className="text-retro-charcoal mb-2" style={{ fontFamily: 'Silkscreen, monospace', fontSize: '48px', letterSpacing: '0.08em' }}>
            GERMAINE LUAH
          </h1>
          <p className="text-retro-grey-dark font-mono" style={{ fontSize: '20px', letterSpacing: '0.03em' }}>
            Software Engineer <span className="text-pink-500 px-2" style={{ fontSize: '18px' }}>•</span> Builder
          </p>
        </div>

        {/* Terminal-style interface with typing animation */}
        <div className="bg-[#1a1a1a] border-2 border-[#2c2c2c] p-4 w-full max-w-md shadow-[4px_4px_0px_rgba(0,0,0,0.25)]" style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}>
          <div className="flex items-start gap-2">
            <span className="text-white">&gt;</span>
            <div className="flex-1">
              <span className="text-white">{typedText}</span>
              <span className={`inline-block w-3 h-5 bg-cyan-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.1s' }}>█</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Tooltip text="View portfolio">
            <MacButton variant="primary" onClick={() => onNavigate('about')}>
              PRESS START
            </MacButton>
          </Tooltip>
          <Tooltip text="Browse projects">
            <MacButton variant="secondary" onClick={() => onNavigate('projects')}>
              PORTFOLIO
            </MacButton>
          </Tooltip>
        </div>

        {/* Stat cards - Standardized sizing with automation focus */}
        <div className="flex justify-center gap-6 mt-6 w-full">
          <StatCard 
            value="3+" 
            label="Years Exp"
            icon={<TrophyIcon />}
            tooltip={{
              title: "Professional Experience",
              details: [
                "2022 - Present (3+ yrs)",
                "Continuous learning",
                "Growing expertise"
              ]
            }}
            countUp={{
              start: 0,
              end: '3+',
              duration: 1500,
              steps: [0, 1, 2, 3]
            }}
          />
          <StatCard 
            value="500+" 
            label="Hours Saved"
            icon={<ClockLightningIcon size={48} />}
            tooltip={{
              title: "Automation Impact",
              details: [
                "500+ hours saved",
                "Through automation",
                "DevOps efficiency"
              ]
            }}
            countUp={{
              start: 0,
              end: '500+',
              duration: 1800,
              steps: [0, 100, 250, 400, 500]
            }}
          />
          <StatCard 
            value="∞" 
            label="Coffee"
            icon={<CoffeeIcon />}
            tooltip={{
              title: "Coffee Consumed",
              details: [
                "Fueling productivity",
                "One cup at a time",
                "Always brewing..."
              ]
            }}
            countUp={{
              start: 0,
              end: '∞',
              duration: 2000
            }}
          />
        </div>
      </div>
    </Window>
  );
}