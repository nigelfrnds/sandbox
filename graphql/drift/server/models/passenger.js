const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = require('./point-schema');

const PassengerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  geometry: PointSchema,
});

const Passenger = mongoose.model('passenger', PassengerSchema);

module.exports = Passenger;
