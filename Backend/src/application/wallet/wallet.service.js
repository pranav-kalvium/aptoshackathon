const RewardEvent = require('../../domain/reward/reward.model');
const User = require('../../domain/user/user.model');

class WalletService {
    static async getBalance(userId) {
        const events = await RewardEvent.find({ userId });
        return events.reduce((acc, event) => {
            if (event.type === 'EARN') return acc + event.amount;
            if (event.type === 'REDEEM') return acc - event.amount;
            return acc;
        }, 0);
    }

    static async getHistory(userId) {
        return await RewardEvent.find({ userId }).sort({ createdAt: -1 });
    }

    static async earnPoints(walletAddress, amount, reason) {
        const user = await User.findOne({ walletAddress });
        if (!user) {
            throw new Error('User not found');
        }

        return await RewardEvent.create({
            userId: user._id,
            type: 'EARN',
            amount,
            reason
        });
    }
}

module.exports = WalletService;
