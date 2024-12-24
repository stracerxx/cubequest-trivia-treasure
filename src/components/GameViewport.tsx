import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

const GameViewport: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    toast("Welcome to Chamber 1", {
      description: "Answer correctly or face the consequences...",
      duration: 5000,
    });
  }, []);

  return (
    <div className="relative w-full h-[60vh] bg-game-purple pixel-borders overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Chamber visualization */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="border border-game-pink/30 bg-game-purple/20 backdrop-blur-sm"
          />
        ))}
      </div>

      {/* Chamber number */}
      <div className="absolute top-4 left-4 text-game-pink font-bold text-xl">
        CHAMBER 01
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-4 left-4 text-game-blue font-mono text-sm">
        X: 0 Y: 0 Z: 0
      </div>

      {/* Transition effect */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black animate-fade-in" />
      )}
    </div>
  );
};

export default GameViewport;