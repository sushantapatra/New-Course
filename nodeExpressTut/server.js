//import express
const express = require("express");

//rest obj
const app = express();

//rest / routes / endpoints
app.get("/", (req, res) => {
	//console.log(req);
	console.log(res);
	res.send("Welcome to Get API");
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on : localhost:${PORT}`);
});
