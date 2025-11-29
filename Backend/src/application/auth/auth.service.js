const User = require('../../domain/user/user.model');

class AuthService {
    static async login(walletAddress) {
        if (!walletAddress) {
            throw new Error('Wallet address is required');
        }

        let user = await User.findOne({ walletAddress });

        if (!user) {
            user = await User.create({ walletAddress });
        }

        return user;
    }
}

module.exports = AuthService;
