export interface Group {
  _id: string;
  group_level: number;
  players: Player[];
  games: Game[];
}
