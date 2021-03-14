const express = require("express");
const { checkSchema, validationResult } = require("express-validator");
const { customerValidation } = require("./../helpers/validator");
const customerController = require("../controller/customer");

const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.post("/customer", checkSchema(customerValidation), (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({
			message: "Por favor verifique los siguientes campos",
			errors: errors.array(),
		});
	}
	customerController.store(req, res);
});

module.exports = app;
