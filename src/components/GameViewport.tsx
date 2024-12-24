import React from 'react';

const GameViewport = () => {
  return (
    <div className="relative w-full h-[60vh] bg-game-purple pixel-borders">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-game-pink animate-pulse">Chamber 1</h2>
      </div>
    </div>
  );
};

export default GameViewport;