import React from 'react';
import { useGameState } from '../lib/gameState';

const StatusPanel = () => {
  const { health, deaths, currentChamber } = useGameState();
  
  return (
    <div className="absolute top-4 right-4 p-4 bg-game-dark pixel-borders">
      <div className="text-game-pink mb-2">
        Health: {health}%
      </div>
      <div className="text-game-blue">
        Deaths: {deaths}
      </div>
      <div className="mt-2 text-xs text-game-blue/70 font-mono">
        Chamber: {currentChamber}/50
      </div>
    </div>
  );
};

export default StatusPanel;