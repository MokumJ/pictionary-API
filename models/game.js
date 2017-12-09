// models/game.js
const mongoose = require('../config/database')
const { Schema } = mongoose


const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  pairs: [String],
  points: Number
});

const gameSchema = new Schema({

  players: [playerSchema],
  word: String,
  guesses: [],
  isDrawer: {type: Boolean, default: false},
  started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastCard: { type: Number },
  draw: { type: Boolean, default: false },
});

module.exports = mongoose.model('games', gameSchema)
