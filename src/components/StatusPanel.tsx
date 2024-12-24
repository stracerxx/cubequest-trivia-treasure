import React from 'react';
import { initialGameState } from '../lib/gameState';

const StatusPanel = () => {
  return (
    <div className="absolute top-4 right-4 p-4 bg-game-dark pixel-borders">
      <div className="text-game-pink mb-2">
        Health: {initialGameState.health}%
      </div>
      <div className="text-game-blue">
        Deaths: {initialGameState.deaths}
      </div>
      <div className="mt-2 text-xs text-game-blue/70 font-mono">
        Chamber: {initialGameState.currentChamber}/50
      </div>
    </div>
  );
};

export default StatusPanel;