//const bcrypt = require("bcrypt");
const soap = require("soap");
const dotenv = require("dotenv");
dotenv.config();const cors = require('cors');
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
						status: result.code.$value === "200",
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
}
module.exports = new CustomerController();
