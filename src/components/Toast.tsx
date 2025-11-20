import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slide in
    setTimeout(() => setIsVisible(true), 10);

    // Auto dismiss
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const borderColors = {
    success: 'border-green-500',
    error: 'border-red-500',
    info: 'border-cyan-500'
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };

  return (
    <div
      className={`fixed top-20 right-4 z-50 bg-retro-frame border-2 ${borderColors[type]} px-4 py-3 shadow-retro transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 font-mono text-sm text-retro-charcoal">
        <span className="text-lg">{icons[type]}</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
