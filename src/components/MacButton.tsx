import { ReactNode, useState } from 'react';

interface MacButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export default function MacButton({ 
  children, 
  onClick, 
  variant = 'default',
  className = '',
  disabled = false
}: MacButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  
  const baseStyles = "px-6 py-2 font-mono text-sm border-2 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";
  
  const variantStyles = {
    default: `bg-gradient-to-b from-retro-frame to-retro-grey border-retro-grey-dark text-retro-charcoal
      hover:from-white hover:to-retro-grey-light hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]
      active:translate-y-0.5 active:shadow-none
      ${isPressed ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]' : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'}`,
    primary: `bg-gradient-to-b from-pink-500 to-pink-600 border-pink-700 text-white
      hover:from-pink-400 hover:to-pink-500 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(255,0,110,0.4)]
      active:translate-y-0.5 active:shadow-none
      ${isPressed ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]' : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'}`,
    secondary: `bg-gradient-to-b from-cyan-400 to-cyan-500 border-cyan-700 text-white
      hover:from-cyan-300 hover:to-cyan-400 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,180,216,0.4)]
      active:translate-y-0.5 active:shadow-none
      ${isPressed ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]' : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'}`
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variantStyles[variant]} ${className} cursor-pointer hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}