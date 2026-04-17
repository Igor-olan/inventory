const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const { Sequelize } = require("sequelize");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/', (req, res) => {
    res.send({
        message: "server running"
    });
});

const PORT = process.envPORT || 5000;

// Sequelize.authenticate().then(() => {
// console.log('DB connected');

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
// })