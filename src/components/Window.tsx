import { ReactNode, useState } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  width?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function Window({ 
  title, 
  children, 
  className = '',
  width = 'max-w-2xl',
  onClose,
  onMinimize,
  onMaximize
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={`${width} w-full bg-retro-grey-light border-3 border-retro-border-dark transition-all duration-200 ${
      isDragging 
        ? 'shadow-[8px_8px_0px_rgba(0,0,0,0.3)] opacity-95 cursor-grabbing' 
        : 'shadow-[6px_6px_0px_rgba(0,0,0,0.25)] cursor-default'
    } ${className}`}>
      {/* Window Title Bar */}
      <div 
        className={`h-8 bg-gradient-to-b ${
          isHovering ? 'from-white to-retro-frame' : 'from-retro-title-bar to-retro-frame'
        } border-b-2 border-retro-grey-dark flex items-center justify-between px-3 select-none transition-all duration-150 window-title`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 border border-red-700 hover:bg-red-400 active:bg-red-600 transition-colors cursor-pointer"
            aria-label="Close"
          />
          <button 
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600 hover:bg-yellow-300 active:bg-yellow-500 transition-colors cursor-pointer"
            aria-label="Minimize"
          />
          <button 
            onClick={onMaximize}
            className="w-3 h-3 rounded-full bg-green-500 border border-green-700 hover:bg-green-400 active:bg-green-600 transition-colors cursor-pointer"
            aria-label="Maximize"
          />
        </div>

        {/* Window Title */}
        <div className="flex-1 text-center">
          <span className="font-mono text-sm text-retro-charcoal">{title}</span>
        </div>

        {/* Collapse Button */}
        <div className="w-4 flex justify-end">
          <button 
            className="text-xs text-retro-charcoal hover:text-retro-grey-dark transition-colors cursor-pointer"
            aria-label="Window options"
          >
            ▼
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="relative">
        {/* Inner highlight for 3D effect */}
        <div className="absolute inset-0 border border-white pointer-events-none" />
        <div className="p-8">
          {children}
        </div>
      </div>

      {/* Resize Handle */}
      <div className="absolute bottom-0 right-0 w-4 h-4 group cursor-resize">
        <svg width="16" height="16" viewBox="0 0 16 16" className="opacity-50 group-hover:opacity-100 transition-opacity">
          <line x1="12" y1="4" x2="4" y2="12" stroke="#808080" strokeWidth="1" />
          <line x1="16" y1="4" x2="4" y2="16" stroke="#808080" strokeWidth="1" />
          <line x1="16" y1="8" x2="8" y2="16" stroke="#808080" strokeWidth="1" />
          <line x1="16" y1="12" x2="12" y2="16" stroke="#808080" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}