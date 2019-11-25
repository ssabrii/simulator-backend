const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  password: String,
  lastOnline: {
    type: Date,
    default: Date.now
  },
  residence: { type: Schema.Types.ObjectId, ref: 'household' }
});

const householdSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  coords: {
    x: Number,
    y: Number
  },
  windSimulation: {
    mu: Number,
    sigma: Number
  },
  created: {
    type: Date,
    default: Date.now
  },
  picture: String,
  weatherData: {
    lastRetrieved: Date,
    temperature: Number,
    timezone: String
  },
  owner: { type: Schema.Types.ObjectId, ref: 'user' }

});

const Household = mongoose.model('household', householdSchema);
const User = mongoose.model('user', userSchema);

module.exports = {
  Household,
  User
}