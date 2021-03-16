const express = require("express");
const walletController = require("../controller/wallet");
const { checkSchema, validationResult } = require("express-validator");
const {
	balanceValidation,
	transactionValidation,
	paymentRequestValidation,
	paymentConfirmValidation,
} = require("./../helpers/validator");

const app = express();

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
		walletController.getBalance(req, res);
	}
);

app.post("/transaction", checkSchema(transactionValidation), (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({
			message: "Por favor verifique los siguientes campos",
			errors: errors.array(),
		});
	}
	walletController.transactionStore(req, res);
});

app.post("/payment", checkSchema(paymentRequestValidation), (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({
			message: "Por favor verifique los siguientes campos",
			errors: errors.array(),
		});
	}
	walletController.paymentRequest(req, res);
});

app.post(
	"/payment/confirm",
	checkSchema(paymentConfirmValidation),
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({
				message: "Por favor verifique los siguientes campos",
				errors: errors.array(),
			});
		}
		walletController.paymentConfirm(req, res);
	}
);

module.exports = app;
