import { useState } from 'react';
import Window from '../Window';
import MacButton from '../MacButton';
import Tooltip from '../Tooltip';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      name: 'ThaiBridge Academy',
      type: 'Full-stack Web Application',
      folder: '📁',
      description: 'Full-stack web application for Thai language school featuring course management, student enrollment, and interactive learning modules. Built with modern frameworks and deployed on cloud infrastructure.',
      tech: [
        { name: 'React', role: 'Frontend framework', use: 'UI components' },
        { name: 'Node.js', role: 'Backend runtime', use: 'API server' },
        { name: 'PostgreSQL', role: 'Database', use: 'Data storage' },
        { name: 'AWS', role: 'Cloud platform', use: 'Hosting & services' },
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
      description: 'Intelligent chatbot platform leveraging AI/ML for natural language processing. Includes admin dashboard, conversation analytics, and multi-channel integration capabilities.',
      tech: [
        { name: 'Python', role: 'Backend language', use: 'Core logic' },
        { name: 'FastAPI', role: 'Web framework', use: 'REST APIs' },
        { name: 'OpenAI', role: 'AI service', use: 'NLP & responses' },
        { name: 'Redis', role: 'Cache', use: 'Session storage' },
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
      name: 'CS-Chatbot',
      type: 'Customer Service Bot',
      folder: '📁',
      description: 'Automated customer service chatbot with NLP capabilities, ticket creation, and knowledge base integration. Reduced response time by 80% and improved customer satisfaction.',
      tech: [
        { name: 'TypeScript', role: 'Language', use: 'Type-safe code' },
        { name: 'DialogFlow', role: 'NLP service', use: 'Intent detection' },
        { name: 'Firebase', role: 'Backend', use: 'Real-time DB' },
        { name: 'Express', role: 'Web server', use: 'API endpoints' },
        { name: 'React', role: 'Frontend', use: 'Chat UI' }
      ],
      year: '2023',
      status: 'Archived',
      links: {
        demo: '#',
        code: '#'
      }
    }
  ];

  return (
    <Window title="PROJECTS" width="max-w-4xl">
      {/* Folder Tabs */}
      <div className="flex gap-2 mb-6 -mt-2 overflow-x-auto">
        {projects.map((project, index) => (
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
              className={`project-tab flex items-center gap-2 px-4 py-2 font-mono text-sm border-2 border-b-0 whitespace-nowrap transition-all duration-150 ${
                selectedProject === index 
                  ? 'bg-retro-grey-light border-retro-grey-dark -mb-0.5 z-10 shadow-[2px_-2px_0px_0px_rgba(0,0,0,0.1)]' 
                  : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light hover:-translate-y-1'
              }`}
            >
              <span>{project.folder}</span>
              <span className="hidden sm:inline">{project.name}</span>
            </button>
          </Tooltip>
        ))}
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
            <span className={`${
              projects[selectedProject].status === 'Live' 
                ? 'text-green-600' 
                : 'text-retro-grey-dark'
            }`}>
              {projects[selectedProject].status}
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-2">Description:</h3>
          <div className="bg-white border-2 border-retro-grey-dark p-4">
            <div className="absolute inset-0 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] pointer-events-none" />
            <p className="font-mono text-sm text-retro-charcoal leading-relaxed">
              {projects[selectedProject].description}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {projects[selectedProject].tech.map((tech, index) => (
              <Tooltip
                key={index}
                title={tech.name}
                details={[
                  tech.role,
                  `Used for: ${tech.use}`
                ]}
              >
                <span
                  className="tech-badge bg-gradient-to-b from-retro-frame to-retro-grey border-2 border-retro-grey-dark px-3 py-1 font-mono text-xs text-retro-charcoal shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)] cursor-default"
                >
                  {tech.name}
                </span>
              </Tooltip>
            ))}
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