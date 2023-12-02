const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//initialize app
const app = express();

// mysql database connection
const con = require("./utils/dbConnection");
const connection = con.getConnection();
connection.connect();

//define middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//create routes
app.get("/users", (req, res) => {
	connection.query("SELECT * from employees", (error, results, fields) => {
		if (error) throw error;
		res.status(200).json({
			success: true,
			data: results,
		});
	});
});
app.post("/users", (req, res) => {
	const e_name = req.body.e_name;
	const e_phone = req.body.e_phone;
	const e_salary = req.body.e_salary;
	connection.query(
		`INSERT INTO employees (e_id, e_name, e_phone, e_salary) VALUES (NULL, '${e_name}', '${e_phone}', '${e_salary}')`,
		(error, results, fields) => {
			if (error) {
				res.status(500).json({
					success: false,
					message: error.message,
				});
			} else {
				res.status(200).json({
					success: true,
					message: "Inserted successsfully",
				});
			}
		}
	);
});
app.put("/users/:id", (req, res) => {
	const id = req.params.id;
	const e_name = req.body.e_name;
	const e_phone = req.body.e_phone;
	const e_salary = req.body.e_salary;
	const query = `UPDATE  employees set e_name= '${e_name}',e_phone='${e_phone}',e_salary='${e_salary}' where e_id=${id}`;
	connection.query(query, (error, results, fields) => {
		if (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(200).json({
				success: true,
				message: "Updated successsfully",
			});
		}
	});
});
app.delete("/users/:id", (req, res) => {
	const id = req.params.id;
	const query = `DELETE FROM  employees  where e_id=${id}`;
	connection.query(query, (error, results, fields) => {
		if (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		} else {
			res.status(200).json({
				success: true,
				message: "Deleted successsfully",
			});
		}
	});
});

//connection.end();

//create server
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server running in 127.0.0.1:${port}`);
});
