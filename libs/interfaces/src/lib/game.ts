import { User } from './user';
import { GameStatus } from '@xo.io/data';

export interface Game {
  id: string;
  players: User[];
  status: GameStatus;
  state: string[][];
}
