const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['EARN', 'REDEEM'], required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  metadata: { type: Object, default: {} },
  timestamp: { type: Date, default: Date.now }
});

ledgerSchema.index({ userId: 1, timestamp: -1 });

module.exports = mongoose.model('Ledger', ledgerSchema);