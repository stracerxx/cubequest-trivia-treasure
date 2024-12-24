export type GameState = {
  currentChamber: number;
  health: number;
  deaths: number;
  coordinates: {
    x: number;
    y: number;
    z: number;
  };
};

export const initialGameState: GameState = {
  currentChamber: 1,
  health: 100,
  deaths: 0,
  coordinates: {
    x: 0,
    y: 0,
    z: 0,
  },
};