import express from 'express';
import { connectDB } from './config/database';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

connectDB().then(() => {
  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
});
