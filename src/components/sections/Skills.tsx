import { useState } from 'react';
import Window from '../Window';
import Tooltip from '../Tooltip';
import { PixelIcons } from '../icons/PixelIcons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skillCategories = {
    languages: {
      label: 'Languages',
      skills: [
        { name: 'Python', icon: 'Python', proficiency: 90, years: '3+', description: 'Primary language for automation & backend' },
        { name: 'JavaScript', icon: 'JavaScript', proficiency: 80, years: '3+', description: 'Full-stack development' },
        { name: 'TypeScript', icon: 'TypeScript', proficiency: 75, years: '2+', description: 'Type-safe applications' },
        { name: 'SQL', icon: 'SQL', proficiency: 85, years: '3+', description: 'Database design & optimization' },
        { name: 'Ruby', icon: 'Ruby', proficiency: 60, years: '1+', description: 'Scripting & automation' }
      ]
    },
    tools: {
      label: 'Tools',
      skills: [
        { name: 'Git', icon: 'Git', proficiency: 90, years: '3+', description: 'Version control expert' },
        { name: 'Docker', icon: 'Docker', proficiency: 85, years: '2+', description: 'Containerization' },
        { name: 'Jenkins', icon: 'Jenkins', proficiency: 80, years: '2+', description: 'CI/CD pipelines' },
        { name: 'Kubernetes', icon: 'Docker', proficiency: 70, years: '1+', description: 'Container orchestration' },
        { name: 'Terraform', icon: 'AWS', proficiency: 75, years: '1+', description: 'Infrastructure as Code' }
      ]
    },
    frameworks: {
      label: 'Frameworks',
      skills: [
        { name: 'React', icon: 'React', proficiency: 85, years: '2+', description: 'UI development' },
        { name: 'Node.js', icon: 'NodeJS', proficiency: 80, years: '2+', description: 'Backend services' },
        { name: 'FastAPI', icon: 'FastAPI', proficiency: 85, years: '2+', description: 'High-performance APIs' },
        { name: 'Django', icon: 'Python', proficiency: 75, years: '2+', description: 'Web applications' },
        { name: 'Express', icon: 'Express', proficiency: 70, years: '1+', description: 'REST APIs' }
      ]
    },
    cloud: {
      label: 'Cloud',
      skills: [
        { name: 'AWS', icon: 'AWS', proficiency: 80, years: '2+', description: 'Cloud infrastructure' },
        { name: 'Azure', icon: 'AWS', proficiency: 65, years: '1+', description: 'Microsoft cloud' },
        { name: 'GCP', icon: 'AWS', proficiency: 60, years: '1+', description: 'Google cloud platform' },
        { name: 'Firebase', icon: 'Firebase', proficiency: 75, years: '2+', description: 'Backend as a service' },
        { name: 'Heroku', icon: 'AWS', proficiency: 70, years: '2+', description: 'Platform as a service' }
      ]
    }
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = PixelIcons[iconName as keyof typeof PixelIcons];
    return IconComponent ? <IconComponent size={48} /> : null;
  };

  return (
    <Window title="SYSTEM_SKILLS.cpl" width="max-w-4xl">
      {/* Category Tabs */}
      <div className="flex gap-1 border-b-2 border-retro-grey-dark mb-6 -mt-2 overflow-x-auto">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setSelectedSkill(null);
            }}
            className={`px-4 py-2 font-mono text-sm border-2 border-b-0 whitespace-nowrap transition-all duration-150 ${
              activeCategory === key 
                ? 'bg-retro-grey-light border-retro-grey-dark -mb-0.5 z-10' 
                : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light hover:-translate-y-0.5'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
          <Tooltip 
            key={index} 
            title={skill.name}
            details={[
              `Proficiency: ${skill.proficiency}%`,
              `Experience: ${skill.years} years`,
              `Main: ${skill.description}`
            ]}
          >
            <button
              onClick={() => setSelectedSkill(skill)}
              className={`skill-card w-full h-40 border-3 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:scale-105 hover:z-10 hover:-translate-y-1 ${
                selectedSkill?.name === skill.name
                  ? 'bg-retro-grey border-pink-500 shadow-[4px_4px_0px_0px_rgba(255,0,110,0.4)] scale-105 -translate-y-1'
                  : 'bg-gradient-to-b from-retro-frame to-retro-grey border-retro-grey-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:border-cyan-500 hover:shadow-[4px_4px_0px_0px_rgba(0,217,255,0.3)]'
              }`}
            >
              <div className="transform transition-transform duration-200 group-hover:scale-110">
                {getIconComponent(skill.icon)}
              </div>
              <span className="font-mono text-sm text-retro-charcoal text-center px-2 leading-tight max-w-[100px]">
                {skill.name}
              </span>
            </button>
          </Tooltip>
        ))}
      </div>

      {/* Skill Details Panel */}
      {selectedSkill && (
        <div className="bg-white border-2 border-retro-grey-dark p-6 space-y-4 animate-fadeIn">
          <div className="absolute inset-0 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] pointer-events-none" />
          
          <div className="flex items-center gap-3 relative">
            <div className="transform scale-75">
              {getIconComponent(selectedSkill.icon)}
            </div>
            <div>
              <h3 className="font-mono text-lg text-retro-charcoal">
                {selectedSkill.name}
              </h3>
              <p className="font-mono text-sm text-retro-grey-dark">
                Selected Skill
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-retro-grey-dark relative">
            <div className="flex items-center justify-between font-mono text-sm">
              <span className="text-retro-grey-dark">Proficiency:</span>
              <span className="text-retro-charcoal">{selectedSkill.proficiency}%</span>
            </div>
            <div className="h-4 bg-retro-grey border-2 border-retro-grey-dark overflow-hidden">
              <div 
                className="h-full bg-retro-charcoal transition-all duration-500 animate-barberpole"
                style={{ 
                  width: `${selectedSkill.proficiency}%`,
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 4px,
                    rgba(255,255,255,0.3) 4px,
                    rgba(255,255,255,0.3) 8px
                  )`,
                  backgroundSize: '16px 16px'
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-sm pt-2 relative">
            <span className="text-retro-grey-dark">Experience:</span>
            <span className="text-retro-charcoal">{selectedSkill.years} years</span>
          </div>

          <div className="pt-2 relative">
            <p className="font-mono text-sm text-retro-charcoal">{selectedSkill.description}</p>
          </div>
        </div>
      )}

      {!selectedSkill && (
        <div className="bg-retro-grey border-2 border-retro-grey-dark p-6 text-center">
          <p className="font-mono text-sm text-retro-grey-dark">
            Select a skill to view details
          </p>
        </div>
      )}
    </Window>
  );
}