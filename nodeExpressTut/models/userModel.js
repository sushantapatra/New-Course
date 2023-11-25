const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
			lowercase: true,
		},
		email: {
			type: String,
			required: [true, "Email is required."],
			unique: true,
			lowercase: true,
		},
		phone: {
			type: String,
			required: [true, "Phone is required."],
		},
		password: {
			type: String,
			required: [true, "Password is required."],
			minLength: [6, "Must be at least 6, got {VALUE}"],
			maxLength: 20,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
