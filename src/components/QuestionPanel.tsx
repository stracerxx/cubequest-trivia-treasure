import React from 'react';

const QuestionPanel = () => {
  return (
    <div className="mt-4 p-4 bg-game-dark pixel-borders">
      <div className="text-game-blue mb-4 overflow-hidden whitespace-nowrap animate-typing">
        Game Master: Welcome to your first trial...
      </div>
      <div className="grid grid-cols-2 gap-4">
        {['A', 'B', 'C', 'D'].map((option) => (
          <button
            key={option}
            className="p-2 bg-game-purple hover:bg-game-pink transition-colors text-white pixel-borders"
          >
            Option {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;