interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
  animated?: boolean;
}

export default function ProgressBar({ 
  value, 
  max = 100, 
  label,
  showPercentage = true,
  className = '',
  animated = false
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`flex items-center gap-3 ${className} group`}>
      {label && (
        <span className="font-mono text-sm text-retro-charcoal min-w-24 group-hover:text-pink-600 transition-colors">
          {label}
        </span>
      )}
      <div className="flex-1 h-6 bg-[#e8e8e8] border-2 relative overflow-hidden group-hover:border-cyan-500 transition-colors" 
           style={{ 
             borderStyle: 'inset',
             boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.15)'
           }}>
        {/* Progress fill with refined stripes */}
        <div 
          className={`h-full relative ${animated ? 'transition-all duration-1000 ease-out' : 'transition-all duration-300'}`}
          style={{ 
            width: `${percentage}%`,
            background: 'linear-gradient(to bottom, #00d97e 0%, #00a86b 100%)'
          }}
        >
          {/* Clean diagonal stripes overlay */}
          <div 
            className="absolute inset-0 animate-barberpole-slow"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 6px,
                rgba(0, 168, 107, 0.4) 6px,
                rgba(0, 168, 107, 0.4) 12px
              )`,
              backgroundSize: '17px 17px'
            }}
          />
          {/* Subtle shine effect */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(to right, transparent 0%, white 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: animated ? 'shine 3s ease-in-out infinite' : 'none'
            }}
          />
        </div>
      </div>
      {showPercentage && (
        <span className="font-mono text-sm text-retro-charcoal min-w-12 text-right font-bold group-hover:text-pink-600 transition-colors">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}