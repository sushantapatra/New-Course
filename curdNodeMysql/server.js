const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer"); //file upload
//const formData = require("express-form-data"); //Module to parse multipart/form data. Based on connect-multiparty
//initialize app
const app = express();

// mysql database connection
const con = require("./utils/dbConnection");
const connection = con.getConnection();
connection.connect();

//define middlware
// Used to parse JSON bodies
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//multipart/form data
//app.use(formData.parse());
app.use(cors());

//multer configuration for file upload
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		//cb(null, file.fieldname + "-" + uniqueSuffix);
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

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

//Single file upload using multer
app.post("/fileuplod", upload.single("image"), (req, res) => {
	const profileImage = req.file.path; // uploaded image name
	//console.log(req.body); // upload image name
	connection.query(
		`INSERT INTO profile_images (image) VALUES ('${profileImage}')`,
		(error, results, fields) => {
			if (error) {
				res.status(500).json({
					success: false,
					message: error.message,
				});
			} else {
				res.status(200).json({
					success: true,
					message: "Profile Image Uploaded successsfully",
				});
			}
		}
	);
});

//multiple files upload using multer
app.post("/multifileuplod", upload.array("image", 12), (req, res) => {
	//console.log(req.files); // upload images object
	req.files.map((curFileObj) => {
		const profileImage = curFileObj.path; // uploaded image name
		//console.log(curFileObj); // get single file object
		connection.query(
			`INSERT INTO profile_images (image) VALUES ('${profileImage}')`,
			(error, results, fields) => {
				if (error) {
					res.status(500).json({
						success: false,
						message: error.message,
					});
				} else {
					res.status(200).json({
						success: true,
						message: "multiple Profile Image Uploaded successsfully",
					});
				}
			}
		);
	});
});

//multiple file upload diffrent name field using multer
const cpUpload = upload.fields([
	{ name: "avatar", maxCount: 1 },
	{ name: "profile", maxCount: 2 },
]);
app.post("/multifileuplod-diffrent-fieldname", cpUpload, (req, res) => {
	console.log(req.files.avatar); // upload images object
	console.log(req.files.profile); // upload images object
	let flag = 0;
	if (req.files.avatar) {
		const avatarImage = req.files.avatar.path; // uploaded image name
		connection.query(
			`INSERT INTO profile_images (image) VALUES ('${avatarImage}')`,
			(error, results, fields) => {
				if (error) {
					res.status(500).json({
						success: false,
						message: error.message,
					});
				} else {
					/* res.status(200).json({
                        success: true,
                        message: "multiple Profile Image Uploaded successsfully",
                    }); */
				}
			}
		);
		req.files.profile.map((curFileObj) => {
			const profileImage = curFileObj.path; // uploaded image name
			connection.query(
				`INSERT INTO profile_images (image) VALUES ('${profileImage}')`,
				(error, results, fields) => {
					if (error) {
						res.status(500).json({
							success: false,
							message: error.message,
						});
					} else {
						res.status(200).json({
							success: true,
							message: "multiple Profile Image Uploaded successsfully",
						});
					}
				}
			);
		});
	}
});

//connection.end();

//create server
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server running in 127.0.0.1:${port}`);
});
