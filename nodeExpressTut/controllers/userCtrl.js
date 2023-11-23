const getUser = (req, res) => {
	res.status(200).send({
		success: true,
		message: "User data comming from MVC Pattern.",
	});
};

const addUser = (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	res.status(200).send({
		success: true,
		message: "Welcome : " + name,
	});
};

module.exports = { getUser, addUser };
