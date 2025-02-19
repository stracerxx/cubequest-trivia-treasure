import React, { useState, useEffect } from 'react';
import { questions } from '../lib/triviaData';
import { toast } from 'sonner';
import { useGameState } from '../lib/gameState';

const QuestionPanel = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswering, setIsAnswering] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const { advanceChamber, damagePlayer } = useGameState();
  const [isDeathAnimation, setIsDeathAnimation] = useState(false);

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

  useEffect(() => {
    if (questionsAnswered === 3) {
      if (correctAnswers >= 2) {
        toast.success("Chamber cleared!", {
          description: "You've answered enough questions correctly. Advancing to next chamber...",
        });
        advanceChamber();
        setCorrectAnswers(0);
        setQuestionsAnswered(0);
        setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
        setTimeLeft(30);
      } else {
        toast.error("Chamber failed!", {
          description: "You didn't answer enough questions correctly. Try again.",
        });
        setCorrectAnswers(0);
        setQuestionsAnswered(0);
        setTimeLeft(30);
      }
    }
  }, [questionsAnswered, correctAnswers]);

  const handleDeath = (message: string) => {
    setIsDeathAnimation(true);
    damagePlayer();
    toast.error("DEATH!", {
      description: message,
    });
    
    // Reset death animation after a delay
    setTimeout(() => {
      setIsDeathAnimation(false);
    }, 1000);
  };

  const handleTimeout = () => {
    handleDeath("Time's up! The chamber claims another victim...");
    setIsAnswering(false);
    setQuestionsAnswered(prev => prev + 1);
  };

  const handleAnswer = (optionIndex: number) => {
    setIsAnswering(false);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      toast.success("Correct!", {
        description: "Keep going...",
      });
      setCorrectAnswers(prev => prev + 1);
    } else {
      handleDeath(currentQuestion.deathTrap);
    }
    
    setQuestionsAnswered(prev => prev + 1);
    
    if (questionsAnswered < 2) {
      const nextQuestion = questions[Math.floor(Math.random() * questions.length)];
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30);
    }
  };

  return (
    <div className={`mt-4 p-4 bg-game-dark pixel-borders transition-colors duration-300 ${isDeathAnimation ? 'bg-red-900' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="text-game-blue overflow-hidden whitespace-nowrap animate-typing">
          Game Master: {currentQuestion.text}
        </div>
        <div className={`text-game-pink font-mono ${timeLeft <= 5 ? 'animate-pulse text-red-500' : ''}`}>
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
      
      <div className="mt-4 text-game-pink text-sm">
        Questions: {questionsAnswered}/3 | Correct: {correctAnswers}
      </div>
    </div>
  );
};

export default QuestionPanel;