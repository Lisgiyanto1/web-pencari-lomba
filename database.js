import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Ambil info db dari .env
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: "mysql",
    host: DB_HOST
});

db.sync();
export default db;