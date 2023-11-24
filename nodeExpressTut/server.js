//import express
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var colors = require("colors");



//rest obj
const app = express();

// view template engine
app.set('view engine', 'pug')
app.set('views', './views')

//middlewares
// parse application/json ||  Parse JSON bodies
app.use(express.json());
//app.use(bodyParser.json());

//View Route
app.get('/', (req, res)=>{
	res.render('home')
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//HTTP request logger middleware for node.js
app.use(morgan("dev"));

//rest / routes / endpoints
/* router.get("/", (req, res) => {
	res.status(200).send("Welcome to Get API");
}); */

//import define user routes
app.use('/api/v1/user', require('./routes/userRoute'))





//creating server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on : 127.0.0.1:${PORT}`.blue.bold.bgYellow);
});
