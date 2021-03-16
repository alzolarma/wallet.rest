const express = require("express");
const app = express();
const cors = require("cors");
var dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
	res.send("API REST");
});
const router = require("./api/routes/index");

app.use(express.json());
app.use(router);

module.exports = app;
