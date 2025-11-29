const { createClient } = require('redis');
const config = require('../../config');

const client = createClient({
    url: config.redis.url,
});

client.on('error', (err) => console.log('Redis Client Error', err));

const connectRedis = async () => {
    await client.connect();
    console.log('Connected to Redis');
};

module.exports = {
    client,
    connectRedis,
};
