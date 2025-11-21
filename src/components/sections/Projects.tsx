import { useState } from 'react';
import Window from '../Window';
import MacButton from '../MacButton';
import Tooltip from '../Tooltip';
import { PixelIcons } from '../icons/PixelIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      name: 'ThaiBridge Academy',
      type: 'Full-stack Web Application',
      description: 'Full-stack web application for a Thai language school with course management, student reviews and automated newsletter systems.',
      tech: [
        { name: 'FastAPI', role: 'Backend framework', use: 'REST APIs' },
        { name: 'React', role: 'Frontend library', use: 'UI components' },
        { name: 'TypeScript', role: 'Language', use: 'Type safety' },
        { name: 'Supabase', role: 'Database & Backend', use: 'Data & auth' },
        { name: 'Tailwind CSS', role: 'CSS framework', use: 'Styling' }
      ],
      year: '2024',
      status: 'Live',
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      name: 'Chatbit',
      type: 'AI Chatbot Platform',
      description: 'AI chatbot featuring Human-in-the-Loop workflows, agent orchestration, RAG-based knowledge search, real-time dashboards and automated escalation to deliver context-aware responses and actionable analytics insights.',
      tech: [
        { name: 'Python', role: 'Core language', use: 'Backend logic' },
        { name: 'FastAPI', role: 'Web framework', use: 'REST APIs' },
        { name: 'React', role: 'Frontend library', use: 'UI dashboard' },
        { name: 'TypeScript', role: 'Frontend language', use: 'Type safety' },
        { name: 'HuggingFace', role: 'LLM platform', use: 'AI models' },
        { name: 'PostgreSQL', role: 'Database', use: 'Data storage' },
        { name: 'Docker', role: 'Containerization', use: 'Deployment' }
      ],
      year: '2024',
      status: 'Live',
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      name: 'Cross-Regional Customer Service Chatbot',
      type: 'AI Banking Chatbot',
      description: 'An AI-driven, multilingual chatbot designed to enhance customer service in the banking sector.',
      tech: [
        { name: 'Python', role: 'Core language', use: 'Backend logic' },
        { name: 'Flask', role: 'Backend framework', use: 'Web server' },
        { name: 'Ollama', role: 'LLM platform', use: 'Local AI models' },
        { name: 'NLP', role: 'Natural Language Processing', use: 'Text analysis' }
      ],
      year: '2024',
      status: 'Dev',
      links: {
        demo: '',
        code: '#'
      }
    }
  ];

  return (
    <Window title="PROJECTS" width="max-w-3xl">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-retro-grey-dark mb-6 -mt-2 overflow-x-auto">
        {projects.map((project, index) => {
          const isActive = selectedProject === index;
          return (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`px-4 py-2 font-mono text-sm border-2 border-b-0 whitespace-nowrap transition-all duration-150 relative ${
                isActive
                  ? 'bg-white border-retro-grey-dark -mb-0.5 z-10 cursor-default text-retro-charcoal' 
                  : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light cursor-pointer'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 bg-pink-500" style={{ height: '3px' }} />
              )}
              {project.name}
            </button>
          );
        })}
      </div>

      {/* File Info Panel */}
      <div className="space-y-4">
        {/* Project Preview - Compact */}
        <div className="bg-retro-grey border-2 border-retro-grey-dark p-3 flex items-center gap-3">
          <div className="w-12 h-12 flex-shrink-0">
            <PixelIcons.Document size={48} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-sm text-retro-charcoal truncate">
              {projects[selectedProject].name}
            </div>
            <div className="font-mono text-xs text-retro-grey-dark">
              {projects[selectedProject].type}
            </div>
          </div>
          <div className="flex-shrink-0">
            {projects[selectedProject].status === 'Live' ? (
              <span 
                className="inline-block px-2 py-0.5 font-mono text-xs text-white"
                style={{
                  backgroundColor: '#00a86b',
                  border: '2px solid #008556',
                }}
              >
                Live
              </span>
            ) : (
              <span className="text-retro-grey-dark font-mono text-xs">
                {projects[selectedProject].status}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-2">Description:</h3>
          <div className="bg-[#fafafa] border-2 border-retro-grey-dark p-3">
            <p className="font-mono text-sm text-retro-charcoal leading-relaxed" style={{ color: '#2c2c2c', lineHeight: '1.6' }}>
              {projects[selectedProject].description}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {projects[selectedProject].tech.map((tech, index) => {
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
                    className="px-2 py-1 font-mono bg-[#E5E5E5] border-2 border-[#808080] text-[#3C3C3C] shadow-[1px_1px_0px_rgba(0,0,0,0.15)] hover:bg-[#F0F0F0] hover:border-[#00D9FF] hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,217,255,0.3)] transition-all duration-200 cursor-default inline-block"
                    style={{
                      fontSize: '12px',
                      height: '28px',
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

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-3 font-mono text-xs bg-white border-2 border-retro-grey-dark p-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-retro-grey-dark">Year:</span>
            <span className="text-retro-charcoal">{projects[selectedProject].year}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-retro-grey-dark">Type:</span>
            <span className="text-retro-charcoal">{projects[selectedProject].type}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-retro-grey-dark">
          <Tooltip text="View live project">
            <MacButton 
              variant="primary" 
              className="flex-1"
              onClick={() => window.open(projects[selectedProject].links.demo, '_blank')}
            >
              Live Demo
            </MacButton>
          </Tooltip>
          <Tooltip text="View source code">
            <MacButton 
              variant="secondary" 
              className="flex-1"
              onClick={() => window.open(projects[selectedProject].links.code, '_blank')}
            >
              View Code
            </MacButton>
          </Tooltip>
        </div>
      </div>
    </Window>
  );
}