const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

// Create a new MongoClient
const client = new MongoClient(process.env.DB_CONNECT, { useUnifiedTopology: true });

module.exports = { client };