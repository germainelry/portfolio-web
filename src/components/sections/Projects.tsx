import { useState } from 'react';
import Window from '../Window';
import MacButton from '../MacButton';
import Tooltip from '../Tooltip';
import { ExternalLink, Github } from 'lucide-react';

// Tech stack color mapping - brand colors
const techColors: Record<string, { bg: string; text: string; border: string }> = {
  'React': { bg: '#61dafb', text: '#000000', border: '#4fc3dc' },
  'Node.js': { bg: '#339933', text: '#ffffff', border: '#2d8729' },
  'PostgreSQL': { bg: '#336791', text: '#ffffff', border: '#285577' },
  'AWS': { bg: '#ff9900', text: '#000000', border: '#e68a00' },
  'Tailwind CSS': { bg: '#06b6d4', text: '#ffffff', border: '#0891b2' },
  'Python': { bg: '#3776ab', text: '#ffffff', border: '#2d5f8d' },
  'FastAPI': { bg: '#009688', text: '#ffffff', border: '#00796b' },
  'OpenAI': { bg: '#10a37f', text: '#ffffff', border: '#0d8968' },
  'Redis': { bg: '#dc382d', text: '#ffffff', border: '#b32e26' },
  'Docker': { bg: '#2496ed', text: '#ffffff', border: '#1d7dbf' },
  'TypeScript': { bg: '#3178c6', text: '#ffffff', border: '#2761a3' },
  'DialogFlow': { bg: '#ff9800', text: '#000000', border: '#e68900' },
  'Firebase': { bg: '#ffca28', text: '#000000', border: '#f9a825' },
  'Express': { bg: '#000000', text: '#ffffff', border: '#333333' },
  'Supabase': { bg: '#3ecf8e', text: '#000000', border: '#36b87a' },
  'HuggingFace': { bg: '#ff9d00', text: '#000000', border: '#e68900' },
  'Flask': { bg: '#000000', text: '#ffffff', border: '#333333' },
  'Ollama': { bg: '#000000', text: '#ffffff', border: '#333333' },
  'NLP': { bg: '#00a86b', text: '#ffffff', border: '#008556' },
  'Default': { bg: '#808080', text: '#ffffff', border: '#666666' }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      name: 'ThaiBridge Academy',
      type: 'Full-stack Web Application',
      folder: '📁',
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
      folder: '📁',
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
      folder: '📁',
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
    <Window title="PROJECTS" width="max-w-4xl">
      {/* Folder Tabs */}
      <div className="flex gap-2 mb-6 -mt-2 overflow-x-auto">
        {projects.map((project, index) => {
          const isActive = selectedProject === index;
          return (
            <Tooltip 
              key={index}
              title={project.name}
              details={[
                `Type: ${project.type}`,
                `Status: ${project.status}`,
                `Year: ${project.year}`
              ]}
            >
              <button
                onClick={() => setSelectedProject(index)}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-sm border-2 border-b-0 whitespace-nowrap transition-all duration-150 relative ${
                  isActive
                    ? 'bg-white border-retro-grey-dark -mb-0.5 z-10 cursor-default text-retro-charcoal' 
                    : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light hover:-translate-y-0.5 cursor-pointer'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 bg-pink-500" style={{ height: '3px' }} />
                )}
                <span>{project.folder}</span>
                <span className="hidden sm:inline">{project.name}</span>
              </button>
            </Tooltip>
          );
        })}
      </div>

      {/* File Info Panel */}
      <div className="space-y-6">
        {/* Project Preview */}
        <div className="bg-retro-grey border-2 border-retro-grey-dark p-4 flex items-center justify-center aspect-video">
          <div className="text-center space-y-3">
            <div className="text-6xl">{projects[selectedProject].folder}</div>
            <div className="font-mono text-sm text-retro-charcoal">
              {projects[selectedProject].name}
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-retro-grey-dark">Name:</span>
            <span className="text-retro-charcoal">{projects[selectedProject].name}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-retro-grey-dark">Type:</span>
            <span className="text-retro-charcoal">{projects[selectedProject].type}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-retro-grey-dark">Modified:</span>
            <span className="text-retro-charcoal">{projects[selectedProject].year}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-retro-grey-dark">Status:</span>
            <div className="flex items-center gap-2">
              {projects[selectedProject].status === 'Live' ? (
                <span 
                  className="inline-block px-3 py-1 font-mono text-xs text-white transition-all duration-200"
                  style={{
                    backgroundColor: '#00a86b',
                    border: '2px solid #008556',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 0px rgba(0,0,0,0.2)'
                  }}
                >
                  Live
                </span>
              ) : (
                <span className="text-retro-grey-dark font-mono text-sm">
                  {projects[selectedProject].status}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-2">Description:</h3>
          <div className="bg-[#fafafa] border-2 border-retro-grey-dark p-4 relative">
            {/* Pixel corner accents */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 opacity-30" />
            <div className="absolute top-2 right-5 w-2 h-2 bg-cyan-500 opacity-30" />
            <div className="absolute top-5 right-2 w-2 h-2 bg-cyan-500 opacity-30" />
            
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-500 opacity-30" />
            <div className="absolute bottom-5 left-2 w-2 h-2 bg-cyan-500 opacity-30" />
            <div className="absolute bottom-2 left-5 w-2 h-2 bg-cyan-500 opacity-30" />
            
            <p className="font-mono text-sm text-retro-charcoal leading-relaxed relative z-10" style={{ color: '#2c2c2c', lineHeight: '1.6' }}>
              {projects[selectedProject].description}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {projects[selectedProject].tech.map((tech, index) => {
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
                    className="tech-badge px-4 py-2 font-mono text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.3)] cursor-default inline-block"
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