require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/campus_wallet',
    },
    redis: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
    },
    jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
};
