const userModel = require("../models/userModel");
// get all users data function
const getUsers = async (req, res) => {
	try {
		const users = await userModel.find({});
		res.status(200).send({
			success: true,
			totalUsers: users.length,
			users,
		});
	} catch (error) {
		//console.log(`Error in User ctrl : ${error.message}`.red);
		res.status(400).json({
			success: false,
			message: "Get all user error",
			error: error.message,
		});
	}
};
// get single user data function
const getUser = async (req, res, id) => {
	//console.log(req.body);
	try {
		const id = req.params.id;
		const user = await userModel.findById(req.params.id);
		if (user) {
			res.status(200).send({
				success: true,
				user,
			});
		} else {
			res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
	} catch (error) {
		//console.log(`Error in User ctrl : ${error.message}`.red);
		res.status(400).json({
			success: false,
			message: "Get single user error",
			error: error.message,
		});
	}
};

// create a new user function
const createUser = async (req, res) => {
	try {
		const { name, email, phone, password } = req.body;
		const user = await userModel.create({
			name,
			email,
			phone,
			password,
		});
		res.status(201).json({
			success: true,
			message: "success",
			user,
		});
	} catch (error) {
		//console.log(`Error in User ctrl : ${error.message}`.red);
		res.status(400).json({
			success: false,
			message: false,
			error: error.message,
		});
	}
};
// update a  user function
const updateUser = async (req, res) => {
	try {
		const { name, email, phone, password } = req.body;
		const user = await userModel.findById(req.params.id);
		if (user) {
			user.name = name || user.name;
			user.email = email || user.email;
			user.phone = phone || user.phone;

			if (password) {
				user.password = password;
			} else {
				user.password = user.password;
			}
			const updatedUser = await user.save();
			res.status(200).json({
				success: true,
				_id: updatedUser._id,
				updatedUser,
			});
		} else {
			res.status(400);
			throw new Error("User not found.");
		}
	} catch (error) {
		//console.log(`Error in User ctrl : ${error.message}`.red);
		res.status(400).json({
			success: false,
			message: "user update error",
			error: error.message,
		});
	}
};

// delete a  user function
const deleteUser = async (req, res) => {
	try {
		const user = await userModel.findByIdAndDelete(req.params.id);
		//console.log(user);
		if (user) {
			res.status(200).json({
				success: true,
				message: "User seleted",
			});
		} else {
			res.status(400);
			throw new Error("User not found.");
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "user delete error",
			error: error.message,
		});
	}
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
