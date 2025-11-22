import Window from '../Window';
import MacButton from '../MacButton';
import PixelAvatar from '../PixelAvatar';
import Tooltip from '../Tooltip';
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Code • Build • Automate';
  
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
          <div className="absolute -right-2 top-2 hidden md:block md:-right-6 md:top-4 lg:-right-10 lg:top-6 animate-bounce-subtle">
            <div className="bg-white border-2 border-retro-charcoal px-3 py-1.5 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] rounded">
                <span className="font-mono text-xs md:text-sm whitespace-nowrap text-retro-charcoal">Hello, World!</span>
                {/* Speech bubble tail pointing left */}
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-retro-charcoal" />
                <div className="absolute left-0 top-1/2 -translate-x-[calc(100%-2px)] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-white" />
            </div>
          </div>
        </div>

        {/* Name and Title - Updated Typography */}
        <div className="-mt-2">
          <h1 className="text-retro-charcoal mb-2" style={{ fontFamily: 'Silkscreen, monospace', fontSize: '48px', letterSpacing: '0.08em' }}>
            GERMAINE LUAH
          </h1>
          <p className="text-retro-grey-dark font-mono">
            Software Engineer
          </p>
        </div>

        {/* Terminal-style interface with typing animation */}
        <div className="bg-[#1a1a1a] border-2 border-[#2c2c2c] p-4 w-full max-w-md shadow-[4px_4px_0px_rgba(0,0,0,0.25)]" style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}>
          <div className="flex items-start gap-2">
            <span className="text-white">&gt;</span>
            <div className="flex-1">
              <span className="text-white">{typedText}</span>
              <span className={`inline-block ml-0.5 text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.1s', fontSize: '20px', lineHeight: '20px' }}>|</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row justify-center gap-4 mt-4">
          <Tooltip text="View portfolio">
            <MacButton variant="primary" onClick={() => onNavigate('about')}>
              START
            </MacButton>
          </Tooltip>
          <Tooltip text="Browse projects">
            <MacButton variant="secondary" onClick={() => onNavigate('projects')}>
              QUEST LOGS
            </MacButton>
          </Tooltip>
        </div>
      </div>
    </Window>
  );
}