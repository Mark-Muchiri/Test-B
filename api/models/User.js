const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
  firstName: { type: String, requires: true },
  lastName: { type: String, requires: true },
  password: { type: String, required: true,},
  course: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
