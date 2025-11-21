import { useState } from 'react';

interface MenuBarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  currentTime: Date;
}

export default function MenuBar({ onNavigate, activeSection, currentTime }: MenuBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-6 sm:h-7 
                    bg-gradient-to-b from-retro-frame to-retro-grey 
                    flex items-center justify-between px-2 sm:px-3 
                    border-b border-retro-border-dark shadow-md">
      {/* Left side - Menu */}
      <div className="flex items-center gap-2 sm:gap-4 relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="font-mono text-[10px] sm:text-xs hover:bg-retro-grey-dark 
                     px-1.5 sm:px-2 py-0.5 transition-colors"
        >
          Portfolio
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute top-full left-0 mt-0.5 
                            w-40 sm:w-48 
                            bg-retro-grey-light border-2 border-retro-charcoal 
                            shadow-retro z-50">
              <div className="border-b border-retro-grey-dark px-2 sm:px-3 py-1 sm:py-1.5">
                <span className="font-mono text-[10px] sm:text-xs">About Portfolio</span>
              </div>
              <div className="border-b border-retro-grey-dark" />
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-2 sm:px-3 py-1 sm:py-1.5 
                              font-mono text-[10px] sm:text-xs 
                              hover:bg-retro-grey transition-colors 
                              flex items-center gap-2 ${
                    activeSection === item.id ? 'bg-retro-grey' : ''
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="border-t border-retro-grey-dark" />
              <div className="px-2 sm:px-3 py-1 sm:py-1.5">
                <span className="font-mono text-[10px] sm:text-xs text-retro-grey-dark">Quit</span>
              </div>
            </div>
          </>
        )}

        <span className="font-mono text-[10px] sm:text-xs text-retro-grey-dark hidden md:inline">Edit</span>
        <span className="font-mono text-[10px] sm:text-xs text-retro-grey-dark hidden md:inline">View</span>
        <span className="font-mono text-[10px] sm:text-xs text-retro-grey-dark hidden lg:inline">Go</span>
      </div>

      {/* Right side - Time */}
      <div className="font-mono text-[10px] sm:text-xs">
        {formatTime(currentTime)}
      </div>
    </div>
  );
}