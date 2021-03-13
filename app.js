const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 9000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

var router = require("./api/routes/index.js");
const hostname = process.env.HOST_NAME || "127.0.0.1";

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(express.json());
app.use(router);

// app.get("/customer", function (req, res) {
// 	res.send("Customer");
// });

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
