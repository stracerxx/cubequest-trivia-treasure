import React, { useState, useEffect } from 'react';
import { questions } from '../lib/triviaData';
import { toast } from 'sonner';

const QuestionPanel = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswering, setIsAnswering] = useState(false);

  useEffect(() => {
    if (isAnswering && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleTimeout();
    }
  }, [timeLeft, isAnswering]);

  const handleTimeout = () => {
    toast.error("Time's up!", {
      description: "The chamber grows darker...",
    });
    setIsAnswering(false);
  };

  const handleAnswer = (optionIndex: number) => {
    setIsAnswering(false);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      toast.success("Correct!", {
        description: "You may proceed to the next chamber...",
      });
    } else {
      toast.error("Wrong answer!", {
        description: currentQuestion.deathTrap,
      });
    }
  };

  return (
    <div className="mt-4 p-4 bg-game-dark pixel-borders">
      <div className="flex justify-between items-center mb-4">
        <div className="text-game-blue overflow-hidden whitespace-nowrap animate-typing">
          Game Master: {currentQuestion.text}
        </div>
        <div className="text-game-pink font-mono">
          {timeLeft}s
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="p-2 bg-game-purple hover:bg-game-pink transition-colors text-white pixel-borders"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;