import { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Tooltip from './components/Tooltip';
import { Toaster } from 'sonner@2.0.3';
import { PixelIcons } from './components/icons/PixelIcons';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.horizontal-scroll');
      if (!container) return;
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = container.scrollLeft;
      const sectionWidth = container.scrollWidth / sections.length;
      const currentIndex = Math.round(scrollPosition / sectionWidth);
      
      if (sections[currentIndex] && sections[currentIndex] !== activeSection) {
        setActiveSection(sections[currentIndex]);
      }
    };

    const container = document.querySelector('.horizontal-scroll');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
        scrollToSection(sections[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        scrollToSection(sections[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-retro-desktop relative overflow-x-hidden">
      {/* Toast notifications */}
      <Toaster position="top-right" expand={false} richColors />
      
      {/* Dithered background pattern */}
      <div className="fixed inset-0 bg-dithered-pattern pointer-events-none" />
      
      {/* Animated sparkles and particles */}
      <AnimatedBackground />
      
      {/* Desktop icons (fixed position - visible across all sections) */}
      <div className="fixed top-20 left-8 z-30 hidden lg:block">
        <div className="flex flex-col gap-6">
          <Tooltip
            title="Projects Folder"
            details={[
              "Contains: 10+ projects",
              "Double-click to open"
            ]}
            position="right"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="desktop-icon flex flex-col items-center gap-1 hover:opacity-90 transition-all group"
            >
              <div className="w-16 h-16 bg-retro-grey-light border-2 border-retro-charcoal flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-150 relative">
                <PixelIcons.FolderClosed size={48} />
                {/* Selection highlight */}
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xs text-white font-mono drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Projects</span>
            </button>
          </Tooltip>
          <Tooltip
            title="Resume.pdf"
            details={[
              "File type: PDF",
              "Size: 2.3 MB",
              "Click to download"
            ]}
            position="right"
          >
            <button 
              onClick={() => alert('Resume download would start here')}
              className="desktop-icon flex flex-col items-center gap-1 hover:opacity-90 transition-all group"
            >
              <div className="w-16 h-16 bg-retro-grey-light border-2 border-retro-charcoal flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-150 relative">
                <PixelIcons.Document size={48} />
                {/* Selection highlight */}
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xs text-white font-mono drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Resume</span>
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Menu Bar */}
      <MenuBar 
        onNavigate={scrollToSection} 
        activeSection={activeSection}
        currentTime={time}
      />

      {/* Horizontal scroll container */}
      <main className="relative z-10 pt-8">
        <div className="flex h-[calc(100vh-2rem)] overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth horizontal-scroll">
          <section id="home" className="min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0">
            <Hero onNavigate={scrollToSection} />
          </section>

          <section id="about" className="min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0">
            <About />
          </section>

          <section id="experience" className="min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0">
            <Experience />
          </section>

          <section id="projects" className="min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0">
            <Projects />
          </section>

          <section id="skills" className="min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0">
            <Skills />
          </section>

          <section id="contact" className="min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0">
            <Contact />
          </section>
        </div>
      </main>

      {/* Horizontal Navigation Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-retro-grey-light border-2 border-retro-charcoal px-6 py-3 shadow-retro">
        <div className="flex items-center gap-4">
          {[
            { id: 'home', label: 'Hero' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Exp' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="nav-dot flex flex-col items-center gap-1 hover:opacity-80 transition-all duration-150 relative group"
            >
              <div className={`w-2 h-2 rounded-full border border-retro-charcoal transition-all duration-200 ${
                activeSection === section.id 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-white group-hover:bg-cyan-300 group-hover:scale-110'
              }`} />
              <span className={`font-mono text-xs hidden sm:block transition-colors ${
                activeSection === section.id 
                  ? 'text-pink-600' 
                  : 'text-retro-charcoal group-hover:text-cyan-600'
              }`}>{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <Tooltip text="Previous section">
        <button
          onClick={() => {
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const currentIndex = sections.indexOf(activeSection);
            if (currentIndex > 0) {
              scrollToSection(sections[currentIndex - 1]);
            }
          }}
          className="arrow-nav fixed left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-retro-grey-light border-2 border-retro-charcoal hover:bg-white hover:border-cyan-500 hover:shadow-[3px_3px_0px_0px_rgba(0,180,216,0.4)] transition-all duration-150 flex items-center justify-center font-mono text-xl disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0 active:shadow-none"
          disabled={activeSection === 'home'}
        >
          ←
        </button>
      </Tooltip>

      <Tooltip text="Next section">
        <button
          onClick={() => {
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const currentIndex = sections.indexOf(activeSection);
            if (currentIndex < sections.length - 1) {
              scrollToSection(sections[currentIndex + 1]);
            }
          }}
          className="arrow-nav fixed right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-retro-grey-light border-2 border-retro-charcoal hover:bg-white hover:border-cyan-500 hover:shadow-[3px_3px_0px_0px_rgba(0,180,216,0.4)] transition-all duration-150 flex items-center justify-center font-mono text-xl disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0 active:shadow-none"
          disabled={activeSection === 'contact'}
        >
          →
        </button>
      </Tooltip>
    </div>
  );
}