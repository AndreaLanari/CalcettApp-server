export interface Game {
  players: { name: string; team?: string }[];
  scoreA: string;
  scoreB: string;
  status: string;
  _id: number;
  location: string;
  date: string;
  nOfPlayers: number;
  name: string;
}
