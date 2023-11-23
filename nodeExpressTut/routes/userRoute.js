const express = require("express");
const { getUser, addUser } = require("../controllers/userCtrl");

//routes router object middleware
const router = express.Router();

// routes define
//GET USER || METHOD = GET
router.get("/", getUser);
//POST USER || METHOD = POST
router.post("/add-user", addUser);

//export routes
module.exports = router;
