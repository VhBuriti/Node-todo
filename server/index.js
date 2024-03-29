require("dotenv").config();


const express = require('express');
const router = require('./routes');
const { connectToMongoDB } = require('./connectionDB');

const app = express();
const port = process.env.port || 5000;
app.use("/api", router);
app.use(express.json());

(async function startServer() {
    await connectToMongoDB();

    app.listen(port, () => {
        console.log(`It's alive in https://localhost:${port}`)
    })
})();



