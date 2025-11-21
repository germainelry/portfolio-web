import { useState, useEffect } from 'react';

interface TerminalLine {
  type: 'command' | 'output';
  text: string;
  delay?: number;
}

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines: TerminalLine[] = [
    { type: 'command', text: '$ whoami', delay: 500 },
    { type: 'output', text: '> Germaine Luah' },
    { type: 'output', text: '> Software Engineer' },
    { type: 'command', text: '$ skills --list', delay: 800 },
    { type: 'output', text: '> Python ████████░ 90%' },
    { type: 'output', text: '> DevOps ███████░░ 85%' },
    { type: 'output', text: '> AI     ███████░░ 80%' },
    { type: 'command', text: '$ echo "Hello, World!"', delay: 800 },
    { type: 'output', text: '> Hello, World!' },
  ];

  // Typing animation
  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    const delay = line.type === 'command' ? 50 : 20;

    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const nextDelay = line.delay || 300;
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, nextDelay);
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLine]);

  // Cursor blink
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black border-2 border-retro-grey-dark p-4 font-mono text-sm overflow-hidden h-[280px]">
      {lines.slice(0, currentLine + 1).map((line, index) => (
        <div
          key={index}
          className={`${
            line.type === 'command' ? 'text-cyan-400' : 'text-green-400'
          }`}
        >
          {index === currentLine
            ? line.text.substring(0, currentChar)
            : line.text}
          {index === currentLine && currentChar === line.text.length && (
            <span className={`inline-block w-2 h-4 ml-1 align-middle ${showCursor ? 'bg-green-400' : 'bg-transparent'}`} />
          )}
        </div>
      ))}
      {currentLine >= lines.length && (
        <div className="text-green-400">
          {'> '}
          <span className={`inline-block w-2 h-4 align-middle ${showCursor ? 'bg-green-400' : 'bg-transparent'}`} />
        </div>
      )}
    </div>
  );
}