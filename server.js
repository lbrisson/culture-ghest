import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { signup, login, protect } from './controllers/auth-controller.js'
import userRouter from './routes/user-router.js'


export const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post('/signup', signup)
app.post('/login', login)

app.use('/api', protect)
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