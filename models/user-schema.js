const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    spotifyToken: String,
    spotifyRefresh: String,
    tokenExpiration: Number,
    spotifyId: String,
    playlist: Array,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('user', userSchema)