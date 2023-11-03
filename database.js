const { Sequelize } = require("sequelize");

// Ambil info db dari .env
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

let db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: "mysql",
    host: DB_HOST
});

module.exports = db;