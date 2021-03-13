const mongoose = require("mongoose");

var uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let customerSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "El nombre es necesario"],
		},
		document: {
			type: String,
			unique: true,
			required: [true, "El usuario es necesario"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "El correo institucional es necesario"],
		},
		phone: {
			type: String,
			unique: true,
			required: [true, "El codigo es necesario"],
		},
	},
	{ timestamps: true }
);

customerSchema.plugin(uniqueValidator, {
	message: "{PATH} debe de ser único",
});

customerSchema.methods.toJSON = function () {
	let customer = this;
	let customerObject = customer.toObject();
	// delete customerObject.password;
	// delete customerObject.passwordConfirmation;
	return customerObject;
};

customerSchema.plugin(uniqueValidator, {
	message: "{PATH} debe de ser único",
});

module.exports = mongoose.model("Customer", customerSchema);
