import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/signup', function (req, res) {
	const data = [
		req.body.name,
		req.body.email,
		req.body.password,
		req.body.department,
	];
	const sql =
		'INSERT INTO student_info(name, email, password, department) VALUES (?, ?, ?, ?)';
	con.query(sql, data, function (err, result) {
		if (err) return res.status(400).json({ message: err.message });
		const token = jwt.sign(
			{ role: 'student', email: req.body.email },
			'jwt_secret_key',
			{
				expiresIn: '1d',
			}
		);

		res.cookie('token', token);
		res
			.status(200)
			.json({ message: 'Student registered successfully', loginStatus: true });
	});
});

router.post('/login', (req, res) => {
	const sql = 'SELECT * FROM student_info where email=? and password=?';
	con.query(sql, [req.body.email, req.body.password], (err, result) => {
		if (err) return res.json({ loginStatus: false, Error: 'Querry failed' });
		if (result.length > 0) {
			const email = result[0].email;
			const token = jwt.sign(
				{ role: 'admin', email: email },
				'jwt_secret_key',
				{ expiresIn: '1d' }
			);

			res.cookie('token', token);
			return res.json({ loginStatus: true });
		} else {
			return res.json({
				loginStatus: false,
				Error: 'Wrong email or password ',
			});
		}
	});
});

export default router;
