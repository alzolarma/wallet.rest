//const bcrypt = require("bcrypt");
var soap = require("soap");

var dotenv = require("dotenv");
dotenv.config();
class CustomerController {
	store(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";
		const args = req.body;

		soap.createClient(url, function (err, client) {
			try {
				client.STORE_CUSTOMER(args, function (err, result) {
					res.json({
						message: result.message ? result.message.$value : null,
						data: result.data ? result.data.$value : null,
						code: result.code ? result.code.$value : 200,
						status: result.code.$value === "200",
						errors: [],
					});
				});
			} catch (error) {
				res.json({
					message: "Ha ocurrido un error",
					status: false,
					errors: [],
				});
			}
		});
	}
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
						code: result.code ? result.code.$value : 200,
						status: result.code.$value === "200",
						errors: [],
					});
				});
			} catch (error) {
				res.send({
					message: "Ha ocurrido un error",
					status: false,
					errors: [],
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
						data: result.data ? result.data.$value : null,
						code: result.code ? result.code.$value : 200,
						status: result.code.$value === "200",
						errors: [],
					});
				});
			} catch (error) {
				res.send({
					message: "Ha ocurrido un error",
					status: false,
					errors: [],
				});
			}
		});
	}
}
module.exports = new CustomerController();
