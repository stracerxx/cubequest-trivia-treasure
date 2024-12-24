export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  decade: '80s' | '90s' | '2000s';
  deathTrap: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "In The Matrix (1999), what color pill does Neo take?",
    options: ["Blue Pill", "Red Pill", "Green Pill", "Yellow Pill"],
    correctAnswer: 1,
    decade: '90s',
    deathTrap: "The system crashes and the chamber fills with green code before imploding"
  },
  {
    id: 2,
    text: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    correctAnswer: 1,
    decade: '2000s',
    deathTrap: "A malfunctioning Iron Man suit activates and crushes the player"
  },
  {
    id: 3,
    text: "What was the name of the killer doll in Child's Play (1988)?",
    options: ["Chucky", "Billy", "Annabelle", "Robert"],
    correctAnswer: 0,
    decade: '80s',
    deathTrap: "A possessed doll emerges from the shadows with a knife"
  }
];