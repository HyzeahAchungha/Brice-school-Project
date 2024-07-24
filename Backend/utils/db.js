import mysql from 'mysql';

const con = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'Root1234!',
	database: 'brice',
});

con.connect(function (err) {
	if (err) {
		console.log('connection error');
		console.log(err);
	} else {
		console.log('connected successfully');
	}
});

export default con;
