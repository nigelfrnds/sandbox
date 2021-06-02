const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = require('./point-schema');

const DriverSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  geometry: PointSchema,
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
