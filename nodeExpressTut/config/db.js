const mongoose = require("mongoose");
const colors = require("colors");

const mongoURI = "mongodb://127.0.0.1:27017/expressjsdb";
// function connect mongodb database

/* mongoose
	.connect(mongoURI)
	.then(() => console.log(`MongoDB Connected..`.bgGreen))
	.catch((error) => {
		console.log(`Error : ${error}`.bgRed);
		process.exit(1);
	});
 */
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			"mongodb://127.0.0.1:27017/expressjsdb"
		);
		console.log(
			`Connected to mongodb database ${conn.connection.host}`.bgGreen
		);
	} catch (error) {
		console.log(`MongoDB Error : ${error.message}`.bgRed);
		process.exit(1); //Application Termination
	}
};

module.exports = connectDB;
