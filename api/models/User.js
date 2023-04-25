const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
  username: { type: String, requires: true, min: 4, unique: true },
  password: { type: String, required: true }
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;