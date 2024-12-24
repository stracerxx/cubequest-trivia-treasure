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
  damagePlayer: () => void;
  resetHealth: () => void;
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
  damagePlayer: () => set((state) => {
    const newHealth = state.health - 25;
    if (newHealth <= 0) {
      return {
        health: 100,
        deaths: state.deaths + 1,
        currentChamber: 1,
        coordinates: { x: 0, y: 0, z: 0 }
      };
    }
    return { health: newHealth };
  }),
  resetHealth: () => set({ health: 100 }),
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