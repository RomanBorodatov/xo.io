import mongoose, { Document, Schema } from 'mongoose';
import { Game as GameInterface } from '@xo.io/interfaces';
import UserSchema from './userModel';
import { GameStatus } from '@xo.io/data';

interface GameDocument extends Omit<GameInterface, 'id'>, Document {}

const gameSchema = new Schema<GameDocument>({
  players: { type: [UserSchema], required: true },
  status: { type: String, enum: Object.values(GameStatus), required: true },
  state: { type: [[String]], required: true },
});

const Game = mongoose.model<GameDocument>('Game', gameSchema);

export default Game;
