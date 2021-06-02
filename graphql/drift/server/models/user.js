const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: Schema.Types.String },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
