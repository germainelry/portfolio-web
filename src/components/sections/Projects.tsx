import { useState, useEffect } from 'react';
import Window from '../Window';
import MacButton from '../MacButton';
import Tooltip from '../Tooltip';
import { PixelIcons } from '../icons/PixelIcons';
// Public assets are served from root path
const thaiBridgeIcon = '/projects/thaibridge-icon.svg';
const botIcon = '/projects/bot.png';
const translationBotIcon = '/projects/translation-bot.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showConfidentialModal, setShowConfidentialModal] = useState(false);
  const [showWIPModal, setShowWIPModal] = useState(false);
  const [showNoDemoModal, setShowNoDemoModal] = useState(false);
  const [shouldAnimateBadges, setShouldAnimateBadges] = useState(true);

  const projects = [
    {
      name: 'ThaiBridge Academy',
      type: 'Full-stack Web Application',
      description: 'A comprehensive full-stack web application for a Thai language school featuring course management, student review systems, and automated newsletter functionality to streamline operations and enhance student engagement.',
      tech: [
        { name: 'FastAPI', role: 'Backend framework', use: 'REST APIs' },
        { name: 'React', role: 'Frontend library', use: 'UI Components' },
        { name: 'TypeScript', role: 'Language', use: 'Type Safety' },
        { name: 'Supabase', role: 'Database & Backend', use: 'Data & Auth' },
        { name: 'Tailwind CSS', role: 'CSS framework', use: 'Styling' }
      ],
      year: '2025',
      status: 'Live',
      links: {
        demo: 'https://www.thaibridge.academy/',
        code: '#'
      }
    },
    {
      name: 'Chatbit',
      type: 'AI Chatbot Platform',
      description: 'An advanced AI chatbot platform featuring Human-in-the-Loop workflows, agent orchestration, and RAG-based knowledge search. Includes real-time dashboards and automated escalation to deliver context-aware responses and actionable insights.',
      tech: [
        { name: 'Python', role: 'Core language', use: 'Backend Logic' },
        { name: 'FastAPI', role: 'Web framework', use: 'REST APIs' },
        { name: 'React', role: 'Frontend library', use: 'UI Dashboard' },
        { name: 'TypeScript', role: 'Frontend language', use: 'Type Safety' },
        { name: 'HuggingFace', role: 'LLM platform', use: 'LLMs & Embeddings' },
        { name: 'PostgreSQL', role: 'Database', use: 'Data Storage' },
        { name: 'Docker', role: 'Containerization', use: 'Deployment' }
      ],
      year: '2025',
      status: 'Live',
      links: {
        demo: 'https://germxai.vercel.app/',
        code: '#'
      }
    },
    {
      name: 'Multilingual AI Chatbot',
      type: 'UOB 2024 TDP Hackathon',
      description: 'An AI-driven, multilingual chatbot designed to enhance cross-regional customer service in the banking sector. Provides intelligent, context-aware responses to support customers across different regions and languages.',
      tech: [
        { name: 'Python', role: 'Core language', use: 'Backend Logic' },
        { name: 'Flask', role: 'Backend framework', use: 'Backend Framework' },
        { name: 'Ollama', role: 'LLM platform', use: 'Local AI Model' },
        { name: 'NLP', role: 'Natural Language Processing', use: 'Text Generation' }
      ],
      year: '2024',
      status: 'Archived',
      links: {
        demo: '',
        code: 'https://github.com/germainelry/TDP-LLM-Chatbot'
      }
    }
  ];

  // Re-trigger badge animation when project changes
  useEffect(() => {
    setShouldAnimateBadges(false);
    const timer = setTimeout(() => {
      setShouldAnimateBadges(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedProject]);

  return (
    <Window title="PROJECTS.ZIP" width="max-w-3xl">
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
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
            {projects[selectedProject].name === 'ThaiBridge Academy' ? (
              <img 
                src={thaiBridgeIcon} 
                alt="ThaiBridge Academy icon" 
                className="w-12 h-12 object-contain"
              />
            ) : projects[selectedProject].name === 'Chatbit' ? (
              <img 
                src={botIcon} 
                alt="Chatbit bot icon" 
                className="w-12 h-12 object-contain"
              />
            ) : projects[selectedProject].name === 'Multilingual AI Chatbot' ? (
              <img 
                src={translationBotIcon} 
                alt="Multilingual AI Chatbot icon" 
                className="w-12 h-12 object-contain"
              />
            ) : (
              <PixelIcons.Document size={48} />
            )}
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
                    className={`px-2 py-1 font-mono bg-[#E5E5E5] border-2 border-[#808080] text-[#3C3C3C] shadow-[1px_1px_0px_rgba(0,0,0,0.15)] hover:bg-[#F0F0F0] hover:border-[#00D9FF] hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,217,255,0.3)] transition-all duration-200 cursor-default inline-block ${shouldAnimateBadges ? 'animate-fadeIn' : 'opacity-0'}`}
                    style={{
                      fontSize: '12px',
                      height: '28px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      animationDelay: shouldAnimateBadges ? `${index * 80}ms` : '0ms'
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
        <div className="flex flex-row justify-center gap-3 pt-4 border-t-2 border-retro-grey-dark">
          <Tooltip text="View live project">
            <MacButton
              variant="primary"
              className="flex-1"
              onClick={() => {
                if (projects[selectedProject].name === 'Multilingual AI Chatbot' || !projects[selectedProject].links.demo) {
                  setShowNoDemoModal(true);
                } else {
                  window.open(projects[selectedProject].links.demo, '_blank');
                }
              }}
            >
              Live Demo
            </MacButton>
          </Tooltip>
          <Tooltip text="View source code">
            <MacButton
              variant="secondary"
              className="flex-1"
              onClick={() => {
                if (projects[selectedProject].name === 'ThaiBridge Academy') {
                  setShowConfidentialModal(true);
                } else if (projects[selectedProject].name === 'Chatbit') {
                  setShowWIPModal(true);
                } else {
                  window.open(projects[selectedProject].links.code, '_blank');
                }
              }}
            >
              View Code
            </MacButton>
          </Tooltip>
        </div>
      </div>

      {/* Confidential Modal */}
      {showConfidentialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white border-4 border-retro-grey-dark shadow-[8px_8px_0px_rgba(0,0,0,0.3)] max-w-md w-full">
            {/* Modal Title Bar */}
            <div className="bg-gradient-to-b from-retro-title-bar to-retro-frame border-b-2 border-retro-grey-dark px-4 py-2 flex items-center justify-between">
              <span className="font-mono text-sm text-retro-charcoal font-bold">⚠️ NOTICE</span>
              <button
                onClick={() => setShowConfidentialModal(false)}
                className="w-6 h-6 flex items-center justify-center bg-red-500 border-2 border-red-700 hover:bg-red-400 transition-colors cursor-pointer font-mono text-white text-xs"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 bg-[#fafafa] border-2 border-retro-grey-dark">
              <div className="space-y-4">
                <div className="font-mono text-sm text-retro-charcoal leading-relaxed">
                  <p className="mb-3 font-bold">Code Access Restricted</p>
                  <p className="mb-2">
                    The source code for <strong>ThaiBridge Academy</strong> is confidential and proprietary.
                  </p>
                  <p>
                    All code, designs, and related materials are <strong>copyrighted by ThaiBridge</strong> and are not available for public viewing.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-retro-grey-dark">
                  <MacButton
                    variant="primary"
                    className="w-full"
                    onClick={() => setShowConfidentialModal(false)}
                  >
                    Understood
                  </MacButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WIP Modal */}
      {showWIPModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white border-4 border-retro-grey-dark shadow-[8px_8px_0px_rgba(0,0,0,0.3)] max-w-md w-full">
            {/* Modal Title Bar */}
            <div className="bg-gradient-to-b from-retro-title-bar to-retro-frame border-b-2 border-retro-grey-dark px-4 py-2 flex items-center justify-between">
              <span className="font-mono text-sm text-retro-charcoal font-bold">🚧 WORK IN PROGRESS</span>
              <button
                onClick={() => setShowWIPModal(false)}
                className="w-6 h-6 flex items-center justify-center bg-red-500 border-2 border-red-700 hover:bg-red-400 transition-colors cursor-pointer font-mono text-white text-xs"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 bg-[#fafafa] border-2 border-retro-grey-dark">
              <div className="space-y-4">
                <div className="font-mono text-sm text-retro-charcoal leading-relaxed">
                  <p className="mb-3 font-bold">Code Not Available Yet</p>
                  <p className="mb-2">
                    The source code for <strong>Chatbit</strong> is currently a work in progress.
                  </p>
                  <p>
                    The code repository is not available for viewing at this time. Please check back later!
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-retro-grey-dark">
                  <MacButton
                    variant="primary"
                    className="w-full"
                    onClick={() => setShowWIPModal(false)}
                  >
                    Understood
                  </MacButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Demo Modal */}
      {showNoDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white border-4 border-retro-grey-dark shadow-[8px_8px_0px_rgba(0,0,0,0.3)] max-w-md w-full">
            {/* Modal Title Bar */}
            <div className="bg-gradient-to-b from-retro-title-bar to-retro-frame border-b-2 border-retro-grey-dark px-4 py-2 flex items-center justify-between">
              <span className="font-mono text-sm text-retro-charcoal font-bold">💻 DEMO NOT AVAILABLE</span>
              <button
                onClick={() => setShowNoDemoModal(false)}
                className="w-6 h-6 flex items-center justify-center bg-red-500 border-2 border-red-700 hover:bg-red-400 transition-colors cursor-pointer font-mono text-white text-xs"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 bg-[#fafafa] border-2 border-retro-grey-dark">
              <div className="space-y-4">
                <div className="font-mono text-sm text-retro-charcoal leading-relaxed">
                  <p className="mb-3 font-bold">Live Demo Unavailable</p>
                  <p className="mb-2">
                    The <strong>Multilingual AI Chatbot</strong> project was developed locally and does not have a live demo available.
                  </p>
                  <p>
                    This project was created for the <strong>UOB 2024 TDP Hackathon</strong> and was only deployed locally during development.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-retro-grey-dark">
                  <MacButton
                    variant="primary"
                    className="w-full"
                    onClick={() => setShowNoDemoModal(false)}
                  >
                    Understood
                  </MacButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Window>
  );
}