import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { signup, login, protect } from './controllers/auth-controller.js'
import userRouter from './routes/user-router'
import SpotifyWebApi from "spotify-web-api-node"
import lyricsFinder from "lyrics-finder"
// const SpotifyWebApi = require("spotify-web-api-node")
import bodyParser from "body-parser"

// const SpotifyWebApi = require('spotify-web-api-node')

export const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.post('/signup', signup)
app.post('/login', login)

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'e22082cdc99a4af8a1860788ee93fc4e',
    clientSecret: 'bc3e1dc96a9d448d9885555ea45c8b5e',
      refreshToken
  })

  spotifyApi
  .refreshAccessToken()
  .then( (data) => {
      console.log('The access token has been refreshed!');
      res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
      })

      // console.log(data.body);
      // //Save the access token so that it's used in future calls
      // spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch(() => {
      res.sendStatus(400);
  })
})

app.post('/spotify_login', (req, res) => {
  const code = req.body.code

  console.log("Code: from login " + code)
  const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: 'e22082cdc99a4af8a1860788ee93fc4e',
      clientSecret: 'bc3e1dc96a9d448d9885555ea45c8b5e'
  })

  spotifyApi
  .authorizationCodeGrant(code)
  .then(data => {
      res.json({
        redirectUri: 'http://localhost:3000',
        clientId: 'e22082cdc99a4af8a1860788ee93fc4e',
        clientSecret: 'bc3e1dc96a9d448d9885555ea45c8b5e'
      })
      console.log('The token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);
      }).catch((err) => {
          console.log("error: \n" + err)
          res.sendStatus(400)
      })

})

app.get('/lyrics', async (req, res) => {
  const lyrics = await lyricsFinder(req.query.artist,  req.query.track) || "No lyrics found"

  res.json({lyrics})
})

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