import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/user-router'

export const app = express();

app.use(cors())
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/api/user', userRouter)

const connect = (url) =>
  mongoose.connect(
    "mongodb+srv://testLB:gTuSDQ4cWBodSwaL@musicappcluster.agiph.mongodb.net/music-app-db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

connect()
  .then(async (connection) => {
    app.listen(8080, function() {
      console.log("Listening to port 8080");
    });
  })
  .catch((e) => console.error(e));