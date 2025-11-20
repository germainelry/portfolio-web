import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  description?: string;
}

export default function SkillCard({ icon, label, selected = false, onClick, description }: SkillCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[140px] h-[160px] border-3 flex flex-col items-center justify-center gap-3 p-5 transition-all duration-200 hover:scale-105 hover:z-10 hover:-translate-y-1 ${
        selected
          ? 'bg-retro-grey border-pink-500 shadow-[4px_4px_0px_0px_rgba(255,0,110,0.4)] scale-105 -translate-y-1'
          : 'bg-gradient-to-b from-retro-frame to-retro-grey border-retro-grey-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:border-cyan-500 hover:shadow-[4px_4px_0px_0px_rgba(0,217,255,0.3)]'
      }`}
      title={description}
    >
      <div className="text-[64px] leading-none">
        {icon}
      </div>
      <span className="font-mono text-sm text-retro-charcoal text-center leading-tight max-w-[100px]">
        {label}
      </span>
    </button>
  );
}
