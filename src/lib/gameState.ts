import { create } from 'zustand';

export type GameState = {
  currentChamber: number;
  health: number;
  deaths: number;
  coordinates: {
    x: number;
    y: number;
    z: number;
  };
  advanceChamber: () => void;
};

export const useGameState = create<GameState>((set) => ({
  currentChamber: 1,
  health: 100,
  deaths: 0,
  coordinates: {
    x: 0,
    y: 0,
    z: 0,
  },
  advanceChamber: () => set((state) => ({ 
    currentChamber: state.currentChamber + 1,
    coordinates: {
      x: Math.floor(Math.random() * 5),
      y: Math.floor(Math.random() * 5),
      z: Math.floor(Math.random() * 5),
    }
  })),
}));

export const initialGameState = {
  currentChamber: 1,
  health: 100,
  deaths: 0,
  coordinates: {
    x: 0,
    y: 0,
    z: 0,
  },
};