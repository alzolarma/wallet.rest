// const UserDAO = require("./../dao/user");
// const User = require("./../models/user");
//const bcrypt = require("bcrypt");

class CustomerController {
	store(req, res) {
		let body = req.body;
		let { name, document, phone, email } = body;
		let user = new Customer({
			name,
			document,
			phone,
			email,
		});

		user.save((err, userDB) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err,
				});
			}
			res.json({
				ok: true,
				user: userDB,
			});
		});

		// try {
		// 	UserDAO.register(req, res);
		// } catch (error) {
		// 	console.error("UserController register", error);
		// }
	}
}
module.exports = new CustomerController();
