const mongoose = require('mongoose');

const redemptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rewardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reward', required: true },
  pointsSpent: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected', 'used'], 
    default: 'pending' 
  },
  qrCode: { type: String }, 
  redemptionCode: { type: String, unique: true }, 
  redeemedAt: { type: Date, default: Date.now },
  usedAt: { type: Date }
});

module.exports = mongoose.model('Redemption', redemptionSchema);