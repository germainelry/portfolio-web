import { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import CursorEffects from './components/CursorEffects';
import Tooltip from './components/Tooltip';
import { Toaster, toast } from 'sonner@2.0.3';
import { Analytics } from '@vercel/analytics/react';

// Public assets are served from root path
const folderIcon = '/desktop-icons/folder.png';
const cvIcon = '/desktop-icons/cv.png';
const suitcaseIcon = '/desktop-icons/suitcase.png';
const skillIcon = '/desktop-icons/skill.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['home']));

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for section animations
  useEffect(() => {
    // Determine the root container based on viewport size
    const isDesktop = window.innerWidth >= 1024;
    const root = isDesktop
      ? document.querySelector('.horizontal-scroll')
      : null; // null = viewport

    const observerOptions = {
      root: root as Element | null,
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => new Set(prev).add(sectionId));
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timer);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      // Desktop: horizontal scroll tracking
      const container = document.querySelector('.horizontal-scroll');
      if (container && window.innerWidth >= 1024) {
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
        const scrollPosition = container.scrollLeft;
        const sectionWidth = container.scrollWidth / sections.length;
        const currentIndex = Math.round(scrollPosition / sectionWidth);
        
        if (sections[currentIndex] && sections[currentIndex] !== activeSection) {
          setActiveSection(sections[currentIndex]);
        }
      }
      // Mobile: vertical scroll tracking
      else {
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const mobileContainer = document.querySelector('.lg\\:hidden');

        for (const section of sections) {
          const element = mobileContainer?.querySelector(`#${section}`) as HTMLElement;
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + element.offsetHeight;

            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
              if (activeSection !== section) {
                setActiveSection(section);
              }
              break;
            }
          }
        }
      }
    };

    const container = document.querySelector('.horizontal-scroll');
    if (container && window.innerWidth >= 1024) {
      container.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
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

    // Determine if we're on mobile or desktop
    const isMobile = window.innerWidth < 1024; // lg breakpoint

    if (isMobile) {
      // On mobile, find the section within the mobile container
      const mobileContainer = document.querySelector('.lg\\:hidden');
      const element = mobileContainer?.querySelector(`#${section}`) as HTMLElement;

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // On desktop, find the section within the horizontal scroll container
      const desktopContainer = document.querySelector('.horizontal-scroll');
      const element = desktopContainer?.querySelector(`#${section}`) as HTMLElement;

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleResumeDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    // Quirky retro/gaming messages
    const quirkyMessages = [
      "Achievement Unlocked: Resume Requested! 🏆",
      "404: Resume not found (but nice try!) 👾",
      "Resume.exe has stopped working... 💥",
      "Level Complete! But the resume is in another castle 🍄",
      "Download successful! (Just kidding, contact me instead) 😄",
      "Resume.zip extracted to /dev/null ✨",
      "Mission Accomplished! (The mission was to make you smile) 😊",
      "File downloaded to the void... reach out via email instead! 📧",
      "Resume acquired! (Psych! Let's connect instead) 🎮",
      "Transfer complete... or is it? 🤔 Contact me to find out!"
    ];

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setDownloadProgress(0);
            const randomMessage = quirkyMessages[Math.floor(Math.random() * quirkyMessages.length)];
            toast.success(randomMessage, {
              duration: 4000,
              style: {
                background: '#d4d4d4',
                border: '2px solid #22c55e',
                fontFamily: 'VT323, monospace',
                fontSize: '16px'
              }
            });
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    // No actual download - just a fun interaction!
  };

  return (
    <div className="min-h-screen bg-retro-desktop relative overflow-x-hidden">
      {/* Toast notifications */}
      <Toaster position="top-right" expand={false} richColors />

      {/* Vercel Web Analytics */}
      <Analytics />

      {/* Dithered background pattern */}
      <div className="fixed inset-0 bg-dithered-pattern pointer-events-none" />

      {/* Animated sparkles and particles */}
      <AnimatedBackground />

      {/* Custom cursor effects */}
      <CursorEffects />
      
      {/* Desktop icons (fixed position - visible across all sections) */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-30 hidden lg:block">
        <div className="flex flex-row gap-6">
          <Tooltip
            title="Projects Folder"
            details={[
              "Contains: 10+ projects",
              "Double-click to open"
            ]}
            position="right"
          >
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              onTouchStart={() => {
                scrollToSection('projects');
              }}
              className="desktop-icon flex flex-col items-center gap-1 hover:opacity-90 transition-all group"
            >
              <div className="w-16 h-16 bg-retro-grey-light border-2 border-retro-charcoal flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-150 relative">
                <img src={folderIcon} alt="Projects folder" className="w-12 h-12" />
                {/* Selection highlight */}
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xs text-white font-mono drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Projects</span>
            </button>
          </Tooltip>
          <Tooltip
            title="Resume.pdf"
            details={[
              "File type: Mystery",
              "Size: Unknown",
              isDownloading ? "Downloading..." : "Click for a surprise! 🎮"
            ]}
            position="right"
          >
            <div className="flex flex-col items-center gap-1 relative">
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (!isDownloading) {
                    handleResumeDownload();
                  }
                }}
                onTouchStart={() => {
                  if (!isDownloading) {
                    handleResumeDownload();
                  }
                }}
                disabled={isDownloading}
                className="desktop-icon flex flex-col items-center gap-1 hover:opacity-90 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-16 h-16 bg-retro-grey-light border-2 border-retro-charcoal flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-150 relative">
                  {isDownloading ? (
                    <span className="font-mono text-xs text-retro-charcoal">{downloadProgress}%</span>
                  ) : (
                    <img src={cvIcon} alt="Resume" className="w-12 h-12" />
                  )}
                  {/* Selection highlight */}
                  <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <span className="text-xs text-white font-mono drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">
                  {isDownloading ? 'Loading...' : 'Resume'}
                </span>
              </button>
              
              {/* Progress Bar */}
              {isDownloading && (
                <div className="absolute top-full mt-2 w-20 bg-white border-2 border-retro-charcoal h-4 relative overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-100 flex items-center justify-center"
                    style={{ width: `${downloadProgress}%` }}
                  >
                    <span className="font-mono text-[8px] text-white mix-blend-difference">
                      {downloadProgress}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Tooltip>
          <Tooltip
            title="Experience"
            details={[
              "Professional journey",
              "3+ years in software",
              "Click to view"
            ]}
            position="right"
          >
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              onTouchStart={() => {
                scrollToSection('experience');
              }}
              className="desktop-icon flex flex-col items-center gap-1 hover:opacity-90 transition-all group"
            >
              <div className="w-16 h-16 bg-retro-grey-light border-2 border-retro-charcoal flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-150 relative">
                <img src={suitcaseIcon} alt="Experience" className="w-12 h-12" />
                {/* Selection highlight */}
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xs text-white font-mono drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Experience</span>
            </button>
          </Tooltip>
          <Tooltip
            title="Skills"
            details={[
              "Technical skills",
              "Tools & frameworks",
              "Click to explore"
            ]}
            position="right"
          >
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
              onTouchStart={() => {
                scrollToSection('skills');
              }}
              className="desktop-icon flex flex-col items-center gap-1 hover:opacity-90 transition-all group"
            >
              <div className="w-16 h-16 bg-retro-grey-light border-2 border-retro-charcoal flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-150 relative">
                <img src={skillIcon} alt="Skills" className="w-12 h-12" />
                {/* Selection highlight */}
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xs text-white font-mono drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Skills</span>
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

      {/* Main Content - Responsive Layout */}
      <main className="relative z-10 pt-6 sm:pt-8">
        {/* Desktop: Horizontal scroll */}
        <div className="hidden lg:flex h-[calc(100vh-2rem)] overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth horizontal-scroll">
          <section id="home" className={`min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0 overflow-y-auto ${visibleSections.has('home') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Hero onNavigate={scrollToSection} />
          </section>

          <section id="about" className={`min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0 overflow-y-auto ${visibleSections.has('about') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <About />
          </section>

          <section id="experience" className={`min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0 overflow-y-auto ${visibleSections.has('experience') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Experience />
          </section>

          <section id="projects" className={`min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0 overflow-y-auto ${visibleSections.has('projects') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Projects />
          </section>

          <section id="skills" className={`min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0 overflow-y-auto ${visibleSections.has('skills') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Skills />
          </section>

          <section id="contact" className={`min-w-full h-full flex items-center justify-center px-4 snap-center flex-shrink-0 overflow-y-auto ${visibleSections.has('contact') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Contact />
          </section>
        </div>

        {/* Mobile/Tablet: Vertical scroll */}
        <div className="lg:hidden min-h-screen">
          <section id="home" className={`min-h-screen flex items-center justify-center px-4 py-16 ${visibleSections.has('home') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Hero onNavigate={scrollToSection} />
          </section>

          <section id="about" className={`min-h-screen flex items-center justify-center px-4 py-16 ${visibleSections.has('about') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <About />
          </section>

          <section id="experience" className={`min-h-screen flex items-center justify-center px-4 py-16 ${visibleSections.has('experience') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Experience />
          </section>

          <section id="projects" className={`min-h-screen flex items-center justify-center px-4 py-16 ${visibleSections.has('projects') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Projects />
          </section>

          <section id="skills" className={`min-h-screen flex items-center justify-center px-4 py-16 ${visibleSections.has('skills') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Skills />
          </section>

          <section id="contact" className={`min-h-screen flex items-center justify-center px-4 py-16 ${visibleSections.has('contact') ? 'animate-fadeSlideUp' : 'opacity-0'}`}>
            <Contact />
          </section>
        </div>
      </main>

      {/* Bottom Navigation - Mobile Optimized */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 
                      bg-retro-grey-light/95 backdrop-blur-sm
                      border-2 border-retro-charcoal 
                      px-3 sm:px-6 py-2 sm:py-3
                      shadow-retro
                      max-w-[95vw]">
        <div className="flex items-center gap-2 sm:gap-4">
          {[
            { id: 'home', label: 'Hero', abbr: 'Hom' },
            { id: 'about', label: 'About', abbr: 'Abt' },
            { id: 'experience', label: 'Exp', abbr: 'Exp' },
            { id: 'projects', label: 'Projects', abbr: 'Prj' },
            { id: 'skills', label: 'Skills', abbr: 'Skl' },
            { id: 'contact', label: 'Contact', abbr: 'Cnt' }
          ].map((section) => (
            <button
              key={section.id}
              onMouseDown={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              onTouchStart={() => {
                scrollToSection(section.id);
              }}
              className="nav-dot flex flex-col items-center gap-1
                         hover:opacity-80 transition-all duration-150
                         relative group min-w-[40px] sm:min-w-auto
                         p-2 sm:p-1"
            >
              {/* Dot indicator */}
              <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full 
                               border border-retro-charcoal 
                               transition-all duration-200 ${
                activeSection === section.id 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-white group-hover:bg-cyan-300 group-hover:scale-110'
              }`} />
              
              {/* Label - abbreviated on mobile, full on larger screens */}
              <span className={`font-mono text-[10px] sm:text-xs 
                               transition-colors text-center ${
                activeSection === section.id 
                  ? 'text-pink-600' 
                  : 'text-retro-charcoal group-hover:text-cyan-600'
              }`}>
                <span className="sm:hidden">{section.abbr}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Arrow Navigation - Desktop Only */}
      <div className="hidden lg:block">
        <Tooltip text="Previous section">
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex > 0) {
                scrollToSection(sections[currentIndex - 1]);
              }
            }}
            onTouchStart={() => {
              const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex > 0) {
                scrollToSection(sections[currentIndex - 1]);
              }
            }}
            className="arrow-nav fixed left-4 top-1/2 -translate-y-1/2 z-40
                       w-12 h-12 bg-retro-grey-light border-2 border-retro-charcoal
                       hover:bg-white hover:border-cyan-500
                       hover:shadow-[3px_3px_0px_0px_rgba(0,180,216,0.4)]
                       transition-all duration-150
                       flex items-center justify-center
                       font-mono text-xl
                       disabled:opacity-50 disabled:cursor-not-allowed
                       active:translate-y-0 active:shadow-none"
            disabled={activeSection === 'home'}
          >
            ←
          </button>
        </Tooltip>

        <Tooltip text="Next section">
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex < sections.length - 1) {
                scrollToSection(sections[currentIndex + 1]);
              }
            }}
            onTouchStart={() => {
              const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex < sections.length - 1) {
                scrollToSection(sections[currentIndex + 1]);
              }
            }}
            className="arrow-nav fixed right-4 top-1/2 -translate-y-1/2 z-40
                       w-12 h-12 bg-retro-grey-light border-2 border-retro-charcoal
                       hover:bg-white hover:border-cyan-500
                       hover:shadow-[3px_3px_0px_0px_rgba(0,180,216,0.4)]
                       transition-all duration-150
                       flex items-center justify-center
                       font-mono text-xl
                       disabled:opacity-50 disabled:cursor-not-allowed
                       active:translate-y-0 active:shadow-none"
            disabled={activeSection === 'contact'}
          >
            →
          </button>
        </Tooltip>
      </div>
    </div>
  );
}