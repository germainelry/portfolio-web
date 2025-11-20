import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-retro-desktop z-50 flex items-center justify-center">
      <div className="bg-dithered-pattern absolute inset-0" />
      <div className="relative bg-retro-grey-light border-3 border-retro-border-dark shadow-retro max-w-md w-full">
        {/* Title Bar */}
        <div className="h-8 bg-gradient-to-b from-retro-title-bar to-retro-frame border-b-2 border-retro-grey-dark flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-red-700" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600" />
            <div className="w-3 h-3 rounded-full bg-green-500 border border-green-700" />
          </div>
          <span className="font-mono text-sm text-retro-charcoal">Loading Portfolio...</span>
          <div className="w-4" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Spinning Beach Ball */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-red-500 border-r-blue-500 border-b-yellow-400 border-l-green-500 animate-spin" />
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="h-5 bg-white border-2 border-retro-grey-dark relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-300 relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Diagonal stripes */}
                <div
                  className="absolute inset-0 animate-barberpole"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 8px,
                      rgba(255,255,255,0.3) 8px,
                      rgba(255,255,255,0.3) 16px
                    )`
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between font-mono text-sm text-retro-charcoal">
              <span>Loading Germaine.exe...</span>
              <span>{Math.round(Math.min(progress, 100))}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
