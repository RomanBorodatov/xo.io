export interface User {
  _id: string;
  username: string;
  isTemp: boolean;
  email?: string;
  provider?: string;
  gamesWon?: number;
  gamesLost?: number;
  gamesTied?: number;
}
