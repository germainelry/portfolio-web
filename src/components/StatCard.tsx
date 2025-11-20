import { useState, useEffect, useRef, ReactNode } from 'react';
import Tooltip from './Tooltip';

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  tooltip?: {
    title: string;
    details: string[];
  };
  countUp?: {
    start: number;
    end: number | string;
    duration?: number;
    steps?: number[];
  };
}

export default function StatCard({ value, label, icon, tooltip, countUp }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(countUp ? String(countUp.start) : value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countUp || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [countUp, hasAnimated]);

  const animateCounter = () => {
    if (!countUp) return;

    const duration = countUp.duration || 2000;
    const steps = countUp.steps || [];
    const isInfinity = countUp.end === '∞';

    if (steps.length > 0) {
      // Use predefined steps
      steps.forEach((step, index) => {
        setTimeout(() => {
          setDisplayValue(String(step) + (typeof countUp.end === 'number' ? '+' : ''));
        }, (duration / steps.length) * index);
      });

      // Set final value
      setTimeout(() => {
        setDisplayValue(String(countUp.end));
      }, duration);
    } else if (isInfinity) {
      // Special animation for infinity
      const infinitySteps = [0, 10, 50, 100, 500, '∞'];
      infinitySteps.forEach((step, index) => {
        setTimeout(() => {
          setDisplayValue(String(step));
        }, (duration / infinitySteps.length) * index);
      });
    } else {
      // Simple count up
      const start = countUp.start;
      const end = typeof countUp.end === 'number' ? countUp.end : parseInt(countUp.end);
      const increment = (end - start) / 20;
      let current = start;

      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setDisplayValue(String(countUp.end));
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current) + '+');
        }
      }, duration / 20);
    }
  };

  const card = (
    <div 
      ref={cardRef}
      className="stat-card group w-[180px] h-[180px] bg-gradient-to-b from-retro-frame to-retro-grey border-3 border-retro-grey-dark p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[6px_6px_0px_0px_rgba(0,217,255,0.4)] transition-all duration-300 cursor-default relative"
    >
      {/* Icon */}
      {icon && (
        <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce-subtle">
          {icon}
        </div>
      )}
      
      {/* Value */}
      <div className="font-mono text-3xl text-retro-charcoal font-bold transition-colors group-hover:text-cyan-600">
        {displayValue}
      </div>
      
      {/* Label */}
      <div className="font-mono text-sm text-retro-grey-dark mt-1 text-center leading-tight">
        {label}
      </div>
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip.title} details={tooltip.details}>
        {card}
      </Tooltip>
    );
  }

  return card;
}