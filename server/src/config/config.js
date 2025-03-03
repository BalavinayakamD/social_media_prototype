const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  waitForConnections: true,
  connectionLimit: 10,
});

connection.getConnection((err, result) => {
  if (err) {
    console.error(`Dtabase connection failed: ${err.stack}`);
  } else {
    console.log("Connected to the Database");
    result.release();
  }
});

module.exports = connection;
