const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  rollNumber: { type: String, unique: true, sparse: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  walletBalance: { type: Number, default: 0 },
  walletAddress: { type: String, unique: true, sparse: true },
  authMethod: { type: String, enum: ['email', 'keyless'], default: 'email' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);