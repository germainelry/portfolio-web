import { useState, useEffect, useRef } from 'react';
import Window from '../Window';
import MacButton from '../MacButton';
import Tooltip from '../Tooltip';
import { toast } from 'sonner@2.0.3';
import { PixelIcons } from '../icons/PixelIcons';

// Public assets are served from root path
const mailIcon = '/contact-icons/mail.png';
const phoneIcon = '/contact-icons/mobile-phone.png';
const linkedinIcon = '/contact-icons/linkedin.png';
const githubIcon = '/contact-icons/github.png';
const heartIcon = '/misc/heart.png';
const documentHeartIcon = '/contact-icons/document-heart.png';

export default function Contact() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullMessage = `Hi there! :D

Thanks for visiting my website! I'd love to connect and discuss opportunities that combine technical problem-solving, workflow automation and product innovation.`;

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Typing animation effect - triggers only when visible
  useEffect(() => {
    if (hasAnimated.current) {
      setTypedText(fullMessage);
      setIsTypingComplete(true);
      return;
    }

    if (!isVisible) return;

    let currentIndex = 0;
    const typingSpeed = 35; // ms per character
    const pauseAtPeriod = 150; // extra pause at periods

    const typeNextChar = () => {
      if (currentIndex < fullMessage.length) {
        const char = fullMessage[currentIndex];
        setTypedText(fullMessage.substring(0, currentIndex + 1));
        currentIndex++;

        // Pause longer at periods
        const delay = char === '.' || char === '!' ? pauseAtPeriod : typingSpeed;
        setTimeout(typeNextChar, delay);
      } else {
        setIsTypingComplete(true);
        hasAnimated.current = true;
      }
    };

    // Start typing after short delay
    const startDelay = setTimeout(() => {
      typeNextChar();
    }, 500);

    return () => clearTimeout(startDelay);
  }, [isVisible]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(label);
      toast.success(`✓ ${label} copied to clipboard!`, {
        duration: 2000,
        style: {
          background: '#d4d4d4',
          border: '2px solid #00d9ff',
          fontFamily: 'VT323, monospace',
          fontSize: '16px'
        }
      });
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  const handleDownload = () => {
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
    <Window title="NEW_MESSAGE.eml" width="max-w-2xl">
      <div ref={containerRef} className="space-y-4">
        {/* Email Header Fields */}
        <div className="space-y-2 font-mono text-sm border-b-2 border-retro-grey-dark pb-4">
          <div className="flex gap-3">
            <span className="text-retro-grey-dark w-16">To:</span>
            <span className="text-retro-charcoal">Recruiters & Collaborators</span>
          </div>
          <div className="flex gap-3">
            <span className="text-retro-grey-dark w-16">From:</span>
            <span className="text-retro-charcoal">Germaine Luah</span>
          </div>
          <div className="flex gap-3">
            <span className="text-retro-grey-dark w-16">Subject:</span>
            <span className="text-retro-charcoal">Let's Connect!</span>
          </div>
        </div>

        {/* Message Body with Typing Animation */}
        <div className="bg-white border-2 border-retro-grey-dark p-6 space-y-4 relative min-h-[280px]">
          <div className="absolute inset-0 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] pointer-events-none" />
          
          <div className="font-mono text-sm text-retro-charcoal leading-relaxed relative whitespace-pre-wrap">
            {typedText}
            {!isTypingComplete && (
              <span className={`inline-block w-0.5 h-4 bg-retro-charcoal ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}>
              </span>
            )}
          </div>

          {/* Contact Info - appears after typing completes */}
          {isTypingComplete && (
            <div className="space-y-2 pt-4 border-t border-retro-grey-dark relative animate-fadeIn">
              {/* Email */}
              <div className="flex items-center gap-3 font-mono text-sm group">
                <div className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${copiedItem === 'Email' ? 'scale-110' : ''}`}>
                  {copiedItem === 'Email' ? (
                    <PixelIcons.Checkmark size={24} />
                  ) : (
                    <img src={mailIcon} alt="Email" className="w-6 h-6" />
                  )}
                </div>
                <Tooltip text="Click to copy email">
                  <button 
                    onClick={() => copyToClipboard('germainelry@gmail.com', 'Email')}
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-all relative group"
                  >
                    germainelry@gmail.com
                  </button>
                </Tooltip>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 font-mono text-sm group">
                <div className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${copiedItem === 'Phone' ? 'scale-110' : ''}`}>
                  {copiedItem === 'Phone' ? (
                    <PixelIcons.Checkmark size={24} />
                  ) : (
                    <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
                  )}
                </div>
                <Tooltip text="Click to copy phone number">
                  <button
                    onClick={() => copyToClipboard('+65 9118 0498', 'Phone')}
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-all"
                  >
                    +65 9118 0498
                  </button>
                </Tooltip>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 font-mono text-sm group">
                <div className="w-6 h-6 transition-transform duration-200 group-hover:scale-110">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </div>
                <Tooltip text="Open LinkedIn profile">
                  <a 
                    href="https://linkedin.com/in/germaineluah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-all group"
                  >
                    linkedin.com/in/germaineluah
                  </a>
                </Tooltip>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-3 font-mono text-sm group">
                <div className="w-6 h-6 transition-transform duration-200 group-hover:scale-110">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </div>
                <Tooltip text="View GitHub repos">
                  <a 
                    href="https://github.com/germaineluah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-all group"
                  >
                    github.com/germaineluah
                  </a>
                </Tooltip>
              </div>
            </div>
          )}

          {/* Signature - appears after typing */}
          {isTypingComplete && (
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <p className="font-mono text-sm text-retro-charcoal leading-relaxed pt-4 relative flex items-center gap-2">
                Looking forward to connecting with you! <img src={heartIcon} alt="❤️" className="inline-block" style={{ width: '20px', height: '20px' }} />
              </p>

              <p className="font-mono text-sm text-retro-charcoal relative mt-4">
                Best Regards,<br/>
                Germaine Luah
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {isTypingComplete && (
          <div className="flex flex-row justify-center gap-3 pt-4 animate-fadeIn">
            <Tooltip text="Open email client">
              <MacButton
                variant="primary"
                className="flex-1"
                onClick={() => {
                  window.location.href = 'mailto:germainelry@gmail.com?subject=Let\'s Connect!&body=Hi Germaine,';
                  toast.success('Opening email client...', {
                    duration: 2000,
                    style: {
                      background: '#d4d4d4',
                      border: '2px solid #00d9ff',
                      fontFamily: 'VT323, monospace',
                      fontSize: '16px'
                    }
                  });
                }}
              >
                SEND EMAIL
              </MacButton>
            </Tooltip>
            <Tooltip text="Connect on LinkedIn">
              <MacButton
                variant="secondary"
                className="flex-1"
                onClick={() => {
                  window.open('https://linkedin.com/in/germaineluah', '_blank');
                  toast.success('Opening LinkedIn...', {
                    duration: 2000,
                    style: {
                      background: '#d4d4d4',
                      border: '2px solid #00d9ff',
                      fontFamily: 'VT323, monospace',
                      fontSize: '16px'
                    }
                  });
                }}
              >
                CONNECT
              </MacButton>
            </Tooltip>
          </div>
        )}

        {/* Resume Download with Progress */}
        {isTypingComplete && (
          <div className="bg-retro-grey border-2 border-retro-grey-dark p-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <img src={documentHeartIcon} alt="Resume" className="w-8 h-8" />
                </div>
                <div className="font-mono text-sm">
                  <div className="text-retro-charcoal">Resume.pdf</div>
                  <div className="text-retro-grey-dark text-xs">Attachment (1 file)</div>
                </div>
              </div>
              <Tooltip text={isDownloading ? 'Downloading...' : 'Click for a surprise! 🎮'}>
                <MacButton 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="group"
                >
                  {isDownloading ? (
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-xs">Loading...</span>
                      {downloadProgress}%
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="group-hover:animate-bounce-subtle inline-block">
                        <PixelIcons.Download size={20} />
                      </span>
                      Download
                    </span>
                  )}
                </MacButton>
              </Tooltip>
            </div>
            
            {/* Progress Bar */}
            {isDownloading && (
              <div className="w-full bg-white border-2 border-retro-charcoal h-6 relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-100 flex items-center justify-center"
                  style={{ width: `${downloadProgress}%` }}
                >
                  <span className="font-mono text-xs text-white mix-blend-difference">
                    Downloading...
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Window>
  );
}