import { useState } from 'react';
import Window from '../Window';
import Tooltip from '../Tooltip';
import ProgressBar from '../ProgressBar';
import { PixelIcons } from '../icons/PixelIcons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skillCategories = {
    languages: {
      label: 'Languages',
      skills: [
        { name: 'Python', icon: 'Python', proficiency: 90, years: '3+', description: 'Primary language for automation & backend' },
        { name: 'SQL', icon: 'SQL', proficiency: 90, years: '3+', description: 'Database design & query optimization' },
        { name: 'PowerShell', icon: 'PowerShell', proficiency: 85, years: '3+', description: 'Windows scripting & automation' },
        { name: 'Bash', icon: 'Bash', proficiency: 85, years: '3+', description: 'Unix/Linux shell scripting' },
        { name: 'TypeScript', icon: 'TypeScript', proficiency: 80, years: '2+', description: 'Type-safe web applications' }
      ]
    },
    tools: {
      label: 'Tools & Infrastructure',
      skills: [
        { name: 'Git', icon: 'Git', proficiency: 85, years: '3+', description: 'Version control & collaboration' },
        { name: 'Linux/Unix', icon: 'Linux', proficiency: 85, years: '3+', description: 'Banking infrastructure & servers' },
        { name: 'Docker', icon: 'Docker', proficiency: 85, years: '2+', description: 'Containerization & deployment' },
        { name: 'Jenkins', icon: 'Jenkins', proficiency: 80, years: '2+', description: 'CI/CD pipeline automation' },
        { name: 'Chef', icon: 'Chef', proficiency: 80, years: '2+', description: 'Infrastructure as Code - Certified' },
        { name: 'n8n', icon: 'N8n', proficiency: 75, years: '1+', description: 'Workflow automation platform' }
      ]
    },
    frameworks: {
      label: 'Frameworks & Databases',
      skills: [
        { name: 'React', icon: 'React', proficiency: 85, years: '2+', description: 'Modern UI development' },
        { name: 'FastAPI', icon: 'FastAPI', proficiency: 90, years: '3+', description: 'High-performance Python APIs' },
        { name: 'Supabase', icon: 'Supabase', proficiency: 80, years: '2+', description: 'Backend as a service' },
        { name: 'SQLite', icon: 'SQLite', proficiency: 85, years: '2+', description: 'Embedded database' },
        { name: 'MongoDB', icon: 'MongoDB', proficiency: 75, years: '2+', description: 'NoSQL document database' }
      ]
    },
    data: {
      label: 'Data & Productivity',
      skills: [
        { name: 'Tableau', icon: 'Tableau', proficiency: 85, years: '2+', description: 'Data visualization & analytics' },
        { name: 'JMP', icon: 'JMP', proficiency: 80, years: '2+', description: 'Statistical analysis software' },
        { name: 'Excel', icon: 'Excel', proficiency: 85, years: '4+', description: 'Advanced formulas & data analysis' },
        { name: 'Jira', icon: 'Jira', proficiency: 85, years: '3+', description: 'Agile project management' },
        { name: 'Confluence', icon: 'Confluence', proficiency: 85, years: '3+', description: 'Team documentation & wikis' },
        { name: 'Notion', icon: 'Notion', proficiency: 80, years: '2+', description: 'Documentation & organization' },
        { name: 'Figma', icon: 'Figma', proficiency: 75, years: '2+', description: 'Design & prototyping' },
        { name: 'Claude', icon: 'Claude', proficiency: 80, years: '1+', description: 'AI assistant & code generation' },
        { name: 'GitHub Copilot', icon: 'Copilot', proficiency: 75, years: '1+', description: 'AI pair programming' },
        { name: 'Cursor', icon: 'Cursor', proficiency: 75, years: '1+', description: 'AI-powered code editor' }
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
        {Object.entries(skillCategories).map(([key, category]) => {
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key);
                setSelectedSkill(null);
              }}
              className={`px-4 py-2 font-mono text-sm border-2 border-b-0 whitespace-nowrap transition-all duration-150 relative ${
                isActive
                  ? 'bg-white border-retro-grey-dark -mb-0.5 z-10 cursor-default text-retro-charcoal' 
                  : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light hover:-translate-y-0.5 cursor-pointer'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 bg-pink-500" style={{ height: '3px' }} />
              )}
              {category.label}
            </button>
          );
        })}
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
              className={`skill-card w-full h-40 border-3 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:scale-105 hover:z-10 hover:-translate-y-1 relative ${
                selectedSkill?.name === skill.name
                  ? 'bg-retro-grey border-pink-500 shadow-[4px_4px_0px_0px_rgba(255,0,110,0.4)] scale-105 -translate-y-1'
                  : 'bg-gradient-to-b from-retro-frame to-retro-grey border-retro-grey-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:border-cyan-500 hover:shadow-[4px_4px_0px_0px_rgba(0,217,255,0.3)]'
              }`}
            >
              {/* Certification badge for Chef */}
              {skill.name === 'Chef' && (
                <div className="absolute -top-2 -right-2 bg-gold border-2 border-retro-charcoal w-10 h-10 flex items-center justify-center shadow-md z-10 animate-pulse">
                  <PixelIcons.Trophy size={24} />
                </div>
              )}
              
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
              <h3 className="font-mono text-retro-charcoal" style={{ fontSize: '20px' }}>
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
            <ProgressBar value={selectedSkill.proficiency} />
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