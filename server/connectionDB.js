require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const url = process.env.MONGODB_URL  || "mongodb://localhost:2701/";

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErros: true,
    }
};

let client;
const connectToMongoDB = async () => {
    if(!client) {
        try {
            client = await MongoClient.connect(url, options);
            console.log('connected to mongoDB');
        } catch (error) {
            console.log(error);
        }
    }
    return client
};

const getConnectedClient = () => client;

module.exports = { connectToMongoDB, getConnectedClient };