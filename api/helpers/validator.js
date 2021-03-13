const customerValidation = {
	email: {
		notEmpty: {
			errorMessage: "El correo es requerido",
		},
		isEmail: {
			errorMessage: "Debe ser un correo",
		},
	},
	phone: {
		notEmpty: {
			errorMessage: "El teléfono es requerido",
		},
	},
	name: {
		notEmpty: {
			errorMessage: "El nombre es requerido",
		},
	},
	document: {
		notEmpty: {
			errorMessage: "El documento es requerido",
		},
	},
};

const balanceValidation = {
	phone: {
		notEmpty: {
			errorMessage: "El teléfono es requerido",
		},
	},
	document: {
		notEmpty: {
			errorMessage: "El documento es requerido",
		},
	},
};

const transactionValidation = {
	mount: {
		notEmpty: {
			errorMessage: "El monto es requerido",
		},
		isFloat: {
			errorMessage: "El tiempo debe ser un valor numérico",
		},
	},

	type: {
		custom: {
			options: (value) => {
				let type = ["credit", "debit"];
				if (type.indexOf(value) == -1) {
					throw new Error(
						`No es un valor válido, los valores válidos son [${type}]`
					);
				}
				return true;
			},
		},
		notEmpty: {
			errorMessage: "El tipo  es requerido",
		},
	},
};

exports.customerValidation = customerValidation;
exports.balanceValidation = balanceValidation;
exports.transactionValidation = transactionValidation;