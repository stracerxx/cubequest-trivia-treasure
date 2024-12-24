import React from 'react';

const StatusPanel = () => {
  return (
    <div className="absolute top-4 right-4 p-4 bg-game-dark pixel-borders">
      <div className="text-game-pink mb-2">Health: 100%</div>
      <div className="text-game-blue">Deaths: 0</div>
    </div>
  );
};

export default StatusPanel;