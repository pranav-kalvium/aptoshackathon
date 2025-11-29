const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/config');
const connectDB = require('./src/infrastructure/db/mongo');
const { connectRedis } = require('./src/infrastructure/db/redis');
const routes = require('./src/interfaces/http/routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// Start Server
const startServer = async () => {
    await connectDB();
    await connectRedis();

    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    });
};

startServer();
