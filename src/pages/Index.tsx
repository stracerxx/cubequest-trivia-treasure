import React from 'react';
import GameViewport from '../components/GameViewport';
import QuestionPanel from '../components/QuestionPanel';
import StatusPanel from '../components/StatusPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-game-dark p-4">
      <div className="crt">
        <div className="scanline" />
        <div className="max-w-4xl mx-auto relative">
          <GameViewport />
          <QuestionPanel />
          <StatusPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;