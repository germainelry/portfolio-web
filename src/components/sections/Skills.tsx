import { useState } from 'react';
import Window from '../Window';
import Tooltip from '../Tooltip';
import ProgressBar from '../ProgressBar';
import { PixelIcons } from '../icons/PixelIcons';
// Import colorful brand icons from react-icons
import {
  SiPython, SiPostgresql, SiGnubash, SiTypescript,
  SiGit, SiLinux, SiDocker, SiJenkins, SiChef,
  SiReact, SiFastapi, SiSupabase, SiSqlite, SiMongodb,
  SiTableau, SiJira, SiConfluence, SiNotion, SiFigma,
  SiAnthropic, SiGithubcopilot, SiN8N
} from 'react-icons/si';
import { FaFlask } from 'react-icons/fa';
import { TbBrandPowershell } from 'react-icons/tb';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skillCategories = {
    languages: {
      label: 'Languages',
      skills: [
        { name: 'Python', icon: 'Python', proficiency: 90, years: '2+', description: 'Primary language for automation & backend' },
        { name: 'SQL', icon: 'Postgresql', proficiency: 85, years: '2+', description: 'Database design & query optimization' },
        { name: 'Bash', icon: 'Gnubash', proficiency: 80, years: '2+', description: 'Unix/Linux shell scripting' },
        { name: 'TypeScript', icon: 'Typescript', proficiency: 80, years: '2+', description: 'Type-safe web applications' },
        { name: 'PowerShell', icon: 'Powershell', proficiency: 75, years: '2+', description: 'Windows automation & scripting' }
      ]
    },
    tools: {
      label: 'Tools & Infrastructure',
      skills: [
        { name: 'Git', icon: 'Git', proficiency: 85, years: '2+', description: 'Version control & collaboration' },
        { name: 'Linux', icon: 'Linux', proficiency: 85, years: '1+', description: 'OS Server management' },
        { name: 'Chef', icon: 'Chef', proficiency: 80, years: '1+', description: 'Associate Chef Certified' },
        { name: 'n8n', icon: 'N8n', proficiency: 75, years: '1+', description: 'Workflow automation platform' },
        { name: 'Jenkins', icon: 'Jenkins', proficiency: 75, years: '1+', description: 'CI/CD pipeline automation' },
        { name: 'Docker', icon: 'Docker', proficiency: 70, years: '1+', description: 'Containerization & deployment' },
      ]
    },
    frameworks: {
      label: 'Frameworks & Databases',
      skills: [
        { name: 'React', icon: 'React', proficiency: 85, years: '2+', description: 'Modern UI development' },
        { name: 'FastAPI', icon: 'Fastapi', proficiency: 90, years: '1+', description: 'High-performance Python APIs' },
        { name: 'Supabase', icon: 'Supabase', proficiency: 80, years: '1+', description: 'Backend as a service' },
        { name: 'SQLite', icon: 'Sqlite', proficiency: 85, years: '1+', description: 'Embedded database' },
        { name: 'MongoDB', icon: 'Mongodb', proficiency: 75, years: '1+', description: 'NoSQL document database' }
      ]
    },
    data: {
      label: 'Data & Productivity',
      skills: [
        { name: 'Claude', icon: 'Anthropic', proficiency: 80, years: '1+', description: 'AI assistant & code generation' },
        { name: 'GitHub Copilot', icon: 'Githubcopilot', proficiency: 75, years: '1+', description: 'AI pair programming' },
        { name: 'Notion', icon: 'Notion', proficiency: 80, years: '2+', description: 'Documentation & organization' },
        { name: 'Figma', icon: 'Figma', proficiency: 75, years: '2+', description: 'Design & prototyping' },
        { name: 'Tableau', icon: 'Tableau', proficiency: 85, years: '2+', description: 'Data visualization & analytics' },
        { name: 'Jira', icon: 'Jira', proficiency: 85, years: '2+', description: 'Agile project management' },
        { name: 'Confluence', icon: 'Confluence', proficiency: 85, years: '3+', description: 'Team documentation & wikis' }
      ]
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      'Python': SiPython,
      'Postgresql': SiPostgresql,
      'Gnubash': SiGnubash,
      'Typescript': SiTypescript,
      'Powershell': TbBrandPowershell,
      'Git': SiGit,
      'Linux': SiLinux,
      'Docker': SiDocker,
      'Jenkins': SiJenkins,
      'Chef': SiChef,
      'N8n': SiN8N,
      'React': SiReact,
      'Fastapi': SiFastapi,
      'Supabase': SiSupabase,
      'Sqlite': SiSqlite,
      'Mongodb': SiMongodb,
      'Tableau': SiTableau,
      'Jira': SiJira,
      'Confluence': SiConfluence,
      'Notion': SiNotion,
      'Figma': SiFigma,
      'Anthropic': SiAnthropic,
      'Githubcopilot': SiGithubcopilot
    };

    // Brand-authentic colors from design brief
    const colorMap: Record<string, string> = {
      'Python': '#3776AB',
      'Postgresql': '#336791',
      'Gnubash': '#000000',
      'Typescript': '#3178C6',
      'Powershell': '#5391FE',
      'Git': '#F05032',
      'Linux': '#000000',
      'Docker': '#2496ED',
      'Jenkins': '#D24939',
      'Chef': '#F09820',
      'N8n': '#EA4B71',
      'React': '#61DAFB',
      'Fastapi': '#009688',
      'Supabase': '#3ECF8E',
      'Sqlite': '#003B57',
      'Mongodb': '#47A248',
      'Tableau': '#E97627',
      'Jira': '#0052CC',
      'Confluence': '#172B4D',
      'Notion': '#000000',
      'Figma': '#F24E1E',
      'Anthropic': '#CC785C',
      'Githubcopilot': '#24292E'
    };
    
    const IconComponent = iconMap[iconName];
    const brandColor = colorMap[iconName];
    return IconComponent ? <IconComponent size={48} color={brandColor} /> : null;
  };

  return (
    <Window title="INVENTORY.DLL" width="max-w-3xl">
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
                  : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light cursor-pointer'
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
              className={`skill-card group w-full h-40 border-4 border-solid flex flex-col items-center justify-center gap-3 transition-all duration-200 relative ${
                selectedSkill?.name === skill.name
                  ? 'bg-gradient-to-b from-[#e5e5e5] to-[#d4d4d4] border-[#00d9ff] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15)] translate-y-1'
                  : 'bg-gradient-to-b from-[#f0f0f0] to-[#e5e5e5] border-[#808080] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:border-[#00d9ff] hover:shadow-[4px_4px_0px_0px_rgba(0,217,255,0.3)] hover:scale-105 hover:-translate-y-1'
              }`}
            >
              {/* Certification badge for Chef */}
              {skill.name === 'Chef' && (
                <div className="absolute -top-2 -right-2 bg-gold border-2 border-retro-charcoal w-10 h-10 flex items-center justify-center shadow-md z-10 animate-pulse">
                  <PixelIcons.Trophy size={24} />
                </div>
              )}

              <div
                className={`transform transition-all duration-200 ${
                  selectedSkill?.name === skill.name
                    ? 'scale-95'
                    : ''
                }`}
              >
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