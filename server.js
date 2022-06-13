const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const {urlencoded, json} = require('body-parser');

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

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