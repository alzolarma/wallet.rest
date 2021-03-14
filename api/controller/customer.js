//const bcrypt = require("bcrypt");
var soap = require("soap");

var dotenv = require("dotenv");
dotenv.config();
class CustomerController {
	store(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";
		var args = {
			name: "Maria",
			phone: "04689999",
			email: "maria",
			document: "676767",
		};
		soap.createClient(url, function (err, client) {
			try {
				client.customerStore(args, function (err, result) {
					res.json({
						ok: true,
						message: result,
					});
				});
			} catch (error) {
				res.json({
					ok: true,
					error: "error",
				});
			}
		});
	}
	getBalance(req, res) {
		const url =
			process.env.API_SOAP || "http://127.0.0.1:8000/index.php/api?wsdl";
		var args = { phone: "909090", document: "909090" };
		soap.createClient(url, function (err, client) {
			try {
				client.GET_BALANCE(args, function (err, result) {
					res.json({
						message: result.message.$value,
						data: result.data.$value,
						status: result.status.$value,
					});
				});
			} catch (error) {
				res.json({
					message: result.message.$value,
					status: result.status.$value,
					errors: result.errors.$value,
				});
			}
		});
	}
}
module.exports = new CustomerController();
