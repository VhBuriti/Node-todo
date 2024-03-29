require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./connectionDB");
const router = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 5000;

(async function startServer() {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`It's alive on http://localhost:${port}`);
    });
})();
