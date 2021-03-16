//const bcrypt = require("bcrypt");
const soap = require("soap");

const dotenv = require("dotenv");
dotenv.config();
class CustomerController {
	getBalance(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";
		const args = req.params;
		soap.createClient(url, function (err, client) {
			try {
				client.GET_BALANCE(args, function (err, result) {
					res.send({
						message: result.message ? result.message.$value : null,
						data: result.data ? result.data.$value : null,
						status: result.code.$value === "200",
					});
				});
			} catch (error) {
				res.send({
					message: "Ha ocurrido un error",
					status: false,
				});
			}
		});
	}
	transactionStore(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";

		const args = req.body;

		soap.createClient(url, function (err, client) {
			try {
				client.MAKE_TRANSACTION(args, function (err, result) {
					res.send({
						message: result.message ? result.message.$value : null,
						status: result.code.$value === "200",
					});
				});
			} catch (error) {
				res.send({
					message: "Ha ocurrido un error",
					status: false,
				});
			}
		});
	}
	paymentRequest(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";

		const args = req.body;

		soap.createClient(url, function (err, client) {
			try {
				client.PAYMENT_REQUEST(args, function (err, result) {
					res.send({
						message: result.message ? result.message.$value : null,
						status: result.code.$value === "200",
					});
				});
			} catch (error) {
				res.send({
					message: "Ha ocurrido un error",
					status: false,
				});
			}
		});
	}

	paymentConfirm(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";

		const args = req.body;

		soap.createClient(url, function (err, client) {
			try {
				client.CONFIRM_PAYMENT(args, function (err, result) {
					res.send({
						message: result.message ? result.message.$value : null,
						status: result.code.$value === "200",
					});
				});
			} catch (error) {
				res.send({
					message: "Ha ocurrido un error",
					status: false,
				});
			}
		});
	}
}
module.exports = new CustomerController();
