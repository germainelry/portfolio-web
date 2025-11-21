import Window from '../Window';
import PixelAvatar from '../PixelAvatar';
import ProgressBar from '../ProgressBar';
import Terminal from '../Terminal';
import Tooltip from '../Tooltip';

export default function About() {
  const skills = [
    { name: 'Python', value: 90 },
    { name: 'Automation', value: 85 },
    { name: 'DevOps', value: 80 },
    { name: 'AI', value: 75 },
    { name: 'SQL', value: 70 },
  ];

  const interests = [
    { name: 'Games', description: 'RPG & Strategy games' },
    { name: 'Anime', description: 'Shonen & Slice of life' },
    { name: 'Keyboards', description: 'Mechanical keyboard enthusiast' },
    { name: 'AI/ML', description: 'Machine learning & automation' },
    { name: 'Bubble Tea', description: 'Boba tea enthusiast' }
  ];

  return (
    <Window title="ABOUT.TXT" width="max-w-2xl">
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 relative group">
            <PixelAvatar size="large" />
            {/* Subtle sparkle effect */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-2 -left-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-retro-grey-dark">Name:</span>
                <span className="text-retro-charcoal">Germaine Luah</span>
              </div>
              <div className="flex gap-2">
                <span className="text-retro-grey-dark">Class:</span>
                <span className="text-retro-charcoal">Software Engineer</span>
              </div>
              <div className="flex gap-2">
                <span className="text-retro-grey-dark">Level:</span>
                <span className="text-retro-charcoal">Mid-Career</span>
              </div>
              <div className="flex gap-2">
                <span className="text-retro-grey-dark">Location:</span>
                <span className="text-retro-charcoal">Singapore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress Bars */}
        <div className="space-y-4 pt-4 border-t-2 border-retro-grey-dark">
          <h3 className="font-mono text-retro-charcoal mb-4">Skills:</h3>
          {skills.map((skill) => (
            <ProgressBar
              key={skill.name}
              label={skill.name}
              value={skill.value}
              max={100}
              showPercentage
              animated
            />
          ))}
        </div>

        {/* Terminal Component */}
        <div className="pt-4 border-t-2 border-retro-grey-dark">
          <h3 className="font-mono text-retro-charcoal mb-3">Terminal:</h3>
          <Terminal />
        </div>

        {/* Interests */}
        <div className="pt-4 border-t-2 border-retro-grey-dark">
          <h3 className="font-mono text-retro-charcoal mb-3">Interests:</h3>
          <div className="flex flex-wrap gap-3 font-mono text-sm">
            {interests.map((interest) => (
              <Tooltip key={interest.name} text={interest.description}>
                <span className="interest-tag bg-retro-grey border-2 border-retro-grey-dark px-3 py-1 hover:bg-white hover:-translate-y-0.5 transition-all duration-150 cursor-default">
                  {interest.name}
                </span>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}