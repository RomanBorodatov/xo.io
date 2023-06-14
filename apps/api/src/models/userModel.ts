import mongoose, { Document, Schema } from 'mongoose';
import { User as UserInterface } from '@xo.io/interfaces';

interface UserDocument extends Omit<UserInterface, '_id'>, Document {}

const userSchema = new Schema<UserDocument>({
  username: { type: 'string', required: true },
  email: String,
  provider: String,
  gamesWon: Number,
  gamesLost: Number,
  gamesTied: Number,
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
