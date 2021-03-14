const express = require("express");
const customerController = require("../controller/customer");
const { checkSchema, validationResult } = require("express-validator");
const {
	balanceValidation,
	transactionValidation,
} = require("./../helpers/validator");

const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Methods",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get(
	"/customer/:phone/:document/balance",
	checkSchema(balanceValidation),
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({
				message: "Por favor verifique los siguientes campos",
				errors: errors.array(),
			});
		}
		customerController.getBalance(req, res);
	}
);

app.put(
	"/customer/:phone/:document/wallet",
	checkSchema(transactionValidation),
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({
				message: "Por favor verifique los siguientes campos",
				errors: errors.array(),
			});
		}
		return res.status(200).json({
			message: "Transacción exitosa de edicion",
		});
	}
);

app.get(
	"/customer/:phone/:document/wallet",
	checkSchema(transactionValidation),
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({
				message: "Por favor verifique los siguientes campos",
				errors: errors.array(),
			});
		}
		return res.status(200).json({
			message: "Solicitud en proceso revise su correo",
		});
	}
);

app.get("/customer/:idSession/:token/wallet/confirm", (req, res) => {
	// Debitar el dinero
	return res.status(200).json({
		message: "Confirmacion exitosa del token",
	});
});

module.exports = app;
