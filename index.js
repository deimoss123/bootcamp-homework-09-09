import express from 'express';
import dotenv from 'dotenv';
import router from './routes/catRoute.js';
import mongoose from 'mongoose';

dotenv.config();

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_PATH);
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  }
}

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', router);

app.listen(port, async () => {
  console.log(`Express server started on port ${port}`);
  await connectToDB();
});
