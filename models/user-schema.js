import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: { type: String, required: true, lowercase: true, unique: true },
    password: {type: String, required: true},
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