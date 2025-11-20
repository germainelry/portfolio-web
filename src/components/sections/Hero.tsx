import Window from '../Window';
import MacButton from '../MacButton';
import PixelAvatar from '../PixelAvatar';
import StatCard from '../StatCard';
import Tooltip from '../Tooltip';
import { TrophyIcon, FolderGridIcon, CoffeeIcon } from '../StatIcons';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
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
          
          {/* Speech bubble */}
          <div className="absolute -right-32 top-4 hidden xl:block animate-bounce-subtle">
            <div className="bg-white border-2 border-retro-charcoal px-3 py-2 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="font-mono text-xs whitespace-nowrap">Hello, World!</span>
              <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-8 border-r-retro-charcoal" />
              <div className="absolute left-0 top-1/2 -translate-x-[calc(100%-2px)] -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-8 border-r-white" />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div>
          <h1 className="font-mono text-retro-charcoal mb-2">
            Germaine Luah
          </h1>
          <p className="font-mono text-lg text-retro-grey-dark">
            Software Engineer • Builder
          </p>
        </div>

        {/* Terminal-style tagline */}
        <div className="bg-white border-2 border-retro-charcoal p-4 w-full max-w-md font-mono text-sm">
          <div className="flex items-start gap-2">
            <span className="text-retro-grey-dark">{'>'}</span>
            <div className="flex-1">
              <span className="text-retro-charcoal">Automation • AI • DevOps</span>
              <span className="inline-block w-2 h-4 bg-retro-charcoal ml-1 animate-pulse">▌</span>
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

        {/* Fun stats with icons and animations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 w-full justify-items-center">
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
            value="10+" 
            label="Projects"
            icon={<FolderGridIcon />}
            tooltip={{
              title: "Projects Completed",
              details: [
                "10+ shipped projects",
                "Full-stack apps",
                "AI/automation tools"
              ]
            }}
            countUp={{
              start: 0,
              end: '10+',
              duration: 1800,
              steps: [0, 3, 6, 10]
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
                "One cup at a time ☕",
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