import { useState } from 'react';
import Window from '../Window';
import Tooltip from '../Tooltip';

// Tech stack color mapping - brand colors (matching Projects section design)
const techColors: Record<string, { bg: string; text: string; border: string }> = {
  // Languages
  'Python': { bg: '#3776ab', text: '#ffffff', border: '#2d5f8d' },
  'Bash': { bg: '#293137', text: '#ffffff', border: '#1a1d21' },
  'PowerShell': { bg: '#012456', text: '#ffffff', border: '#011a3e' },
  
  // Data/Analytics
  'Pandas': { bg: '#150458', text: '#ffffff', border: '#0d0338' },
  'JMP': { bg: '#009e73', text: '#ffffff', border: '#00795a' },
  'Tableau': { bg: '#e97627', text: '#ffffff', border: '#c55d14' },
  'SQL': { bg: '#336791', text: '#ffffff', border: '#285577' },
  'Statistical Analysis': { bg: '#00a86b', text: '#ffffff', border: '#008556' },
  
  // Frameworks/APIs
  'FastAPI': { bg: '#009688', text: '#ffffff', border: '#00796b' },
  
  // DevOps/Infrastructure
  'Chef': { bg: '#f09820', text: '#ffffff', border: '#d17e0a' },
  'Jenkins': { bg: '#d33833', text: '#ffffff', border: '#b02e2a' },
  'CI/CD': { bg: '#6b46c5', text: '#ffffff', border: '#5436a1' },
  'Linux': { bg: '#fcc624', text: '#000000', border: '#e0b00e' },
  
  // Security/Enterprise
  'CyberArk': { bg: '#e20074', text: '#ffffff', border: '#b8005d' },
  'Active Directory': { bg: '#0078d4', text: '#ffffff', border: '#005a9e' },
  
  'Default': { bg: '#808080', text: '#ffffff', border: '#666666' }
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'DBS Bank',
      role: 'Software Engineer',
      period: '2025 June - Present',
      achievements: [
        'Led automation initiatives reducing manual processes by 60%',
        'Implemented CI/CD pipelines improving deployment frequency',
        'Developed internal tools for team productivity enhancement',
        'Mentored junior developers in best practices'
      ],
      tech: [
        { name: 'Python', role: 'Core language', use: 'Automation & backend' },
        { name: 'FastAPI', role: 'Backend framework', use: 'REST APIs' },
        { name: 'CyberArk', role: 'PAM solution', use: 'Privileged access management' },
        { name: 'Pandas', role: 'Data library', use: 'Data processing' },
        { name: 'PowerShell', role: 'Scripting language', use: 'Windows automation' },
        { name: 'Active Directory', role: 'Identity service', use: 'User management' }
      ]
    },
    {
      company: 'UOB Bank',
      role: 'Automation Engineer',
      period: '2024 July - 2025 June',
      achievements: [
        'Designed and deployed automated testing frameworks',
        'Reduced regression testing time by 70% through automation',
        'Integrated monitoring and alerting systems',
        'Collaborated with cross-functional teams on DevOps transformation'
      ],
      tech: [
        { name: 'Python', role: 'Core language', use: 'Automation scripts' },
        { name: 'Chef', role: 'Configuration management', use: 'Infrastructure as code' },
        { name: 'Jenkins', role: 'CI/CD platform', use: 'Pipeline automation' },
        { name: 'CI/CD', role: 'Methodology', use: 'Continuous delivery' },
        { name: 'Linux', role: 'Operating system', use: 'Server management' },
        { name: 'Bash', role: 'Shell scripting', use: 'Unix automation' }
      ]
    },
    {
      company: 'Micron Technology',
      role: 'Process Engineer',
      period: '2022 July - 2024 June',
      achievements: [
        'Optimized manufacturing processes using data analytics',
        'Developed automation scripts for equipment monitoring',
        'Led process improvement initiatives saving $500K annually',
        'Collaborated with R&D on new technology development'
      ],
      tech: [
        { name: 'Python', role: 'Core language', use: 'Data analysis & automation' },
        { name: 'JMP', role: 'Statistical software', use: 'Process analysis' },
        { name: 'Tableau', role: 'BI tool', use: 'Data visualization' },
        { name: 'SQL', role: 'Database language', use: 'Data queries' },
        { name: 'Statistical Analysis', role: 'Methodology', use: 'Process optimization' }
      ]
    }
  ];

  return (
    <Window title="EXPERIENCE.DOC" width="max-w-4xl">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-retro-grey-dark mb-6 -mt-2">
        {experiences.map((exp, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 font-mono text-sm border-2 border-b-0 transition-all duration-150 relative ${
                isActive
                  ? 'bg-white border-retro-grey-dark -mb-0.5 z-10 cursor-default text-retro-charcoal' 
                  : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light hover:-translate-y-0.5 cursor-pointer'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 bg-pink-500" style={{ height: '3px' }} />
              )}
              Level {experiences.length - index}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="font-mono text-xl text-retro-charcoal mb-1">
              {experiences[activeTab].company}
            </h2>
            <p className="font-mono text-retro-grey-dark">
              {experiences[activeTab].role}
            </p>
          </div>
          <div className="bg-retro-grey border-2 border-retro-grey-dark px-4 py-2">
            <span className="font-mono text-sm text-retro-charcoal">
              {experiences[activeTab].period}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white border-2 border-retro-grey-dark p-6">
          <div className="absolute inset-0 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] pointer-events-none" />
          <h3 className="font-mono text-sm text-retro-grey-dark mb-3">Achievements:</h3>
          <ul className="space-y-2">
            {experiences[activeTab].achievements.map((achievement, index) => (
              <li key={index} className="flex gap-3 font-mono text-sm text-retro-charcoal">
                <span className="text-retro-grey-dark">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-3">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {experiences[activeTab].tech.map((tech, index) => {
              const colors = techColors[tech.name] || techColors['Default'];
              return (
                <Tooltip
                  key={index}
                  title={tech.name}
                  details={[
                    tech.role,
                    `Used for: ${tech.use}`
                  ]}
                >
                  <span
                    className="px-4 py-2 font-mono text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.3)] cursor-default inline-block"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                      border: `2px solid ${colors.border}`,
                      borderRadius: '4px',
                      boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                      fontWeight: 'bold',
                      height: '32px',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    {tech.name}
                  </span>
                </Tooltip>
              );
            })}
          </div>
        </div>

        {/* Achievement Progress */}
        <div className="bg-retro-grey border-2 border-retro-grey-dark p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-sm text-retro-charcoal">Career Progress</span>
            <span className="font-mono text-sm text-retro-charcoal">
              Level {experiences.length - activeTab} / {experiences.length}
            </span>
          </div>
          <div className="h-4 bg-white border-2 border-retro-grey-dark overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500"
              style={{ width: `${((experiences.length - activeTab) / experiences.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </Window>
  );
}