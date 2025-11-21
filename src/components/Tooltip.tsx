import { ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  text?: string;
  title?: string;
  details?: string[];
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export default function Tooltip({ 
  children, 
  text, 
  title,
  details = [],
  position = 'top',
  delay = 300 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  const arrowStyles = {
    top: 'top-full left-1/2 -translate-x-1/2',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 rotate-180',
    left: 'left-full top-1/2 -translate-y-1/2 rotate-90',
    right: 'right-full top-1/2 -translate-y-1/2 -rotate-90'
  };

  // Simple text tooltip
  if (text && !title && details.length === 0) {
    return (
      <div 
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <div 
          className={`absolute ${positionStyles[position]} pointer-events-none z-[100] whitespace-nowrap transition-opacity duration-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-retro-grey-light border-2 border-cyan-500 px-4 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)]">
            <span className="font-mono text-xs text-retro-charcoal">{text}</span>
          </div>
          {/* Arrow */}
          <div className={`absolute ${arrowStyles[position]}`}>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-cyan-500" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-retro-grey-light" />
          </div>
        </div>
      </div>
    );
  }

  // Detailed tooltip with title and details
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div 
        className={`absolute ${positionStyles[position]} pointer-events-none z-[100] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-retro-grey-light border-2 border-cyan-500 px-4 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] min-w-[180px]">
          {title && (
            <div className="font-mono text-xs text-retro-charcoal mb-2 border-b border-retro-grey-dark pb-2">
              {title}
            </div>
          )}
          {details.length > 0 && (
            <div className="space-y-1">
              {details.map((detail, index) => (
                <div key={index} className="font-mono text-xs text-retro-charcoal whitespace-nowrap">
                  {detail}
                </div>
              ))}
            </div>
          )}
          {text && !title && (
            <span className="font-mono text-xs text-retro-charcoal">{text}</span>
          )}
        </div>
        {/* Arrow */}
        <div className={`absolute ${arrowStyles[position]}`}>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-cyan-500" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-retro-grey-light" />
        </div>
      </div>
    </div>
  );
}