const express = require("express");
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userCtrl");

//routes router object middleware
const router = express.Router();

// routes define
//CREATE A NEW USER || METHOD = POST
router.post("/create-user", createUser);
//GET All USER || METHOD = GET
router.get("/get-users", getUsers);
//GET SINGLE USER || METHOD = GET
router.get("/get-user/:id", getUser);

//GET UPDATE USER || METHOD = put
router.put("/update-user/:id", updateUser);
//GET UPDATE USER || METHOD = put
router.delete("/delete-user/:id", deleteUser);


//export routes
module.exports = router;
