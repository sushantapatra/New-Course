//import express
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var colors = require("colors");

//rest obj
const app = express();

//middlewares
// parse application/json ||  Parse JSON bodies
app.use(express.json());
//app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//HTTP request logger middleware for node.js
app.use(morgan("dev"));

//Logging Middleware:
const loggerMiddleware = (req, res, next) => {
	console.log(
		`[${new Date().toISOString()}] ${req.method} ${req.url}`.bgGray.magenta
	);
	next();
};
app.use(loggerMiddleware);

//rest / routes / endpoints
app.get("/", (req, res) => {
	res.status(200).send("Welcome to Get API");
});

app.post("/contact-form", (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	res.status(200).send("Form Submitted Values : " + name);
});

//creating server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on : 127.0.0.1:${PORT}`.blue.bold.bgYellow);
});
