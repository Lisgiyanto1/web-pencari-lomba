// Package
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Inisialisasi .env
dotenv.config();

// Ambil info db dari .env
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

// Koneksi tapi bukan .php
const db = new Sequelize({
    dialect: 'mysql',

    host: DB_HOST,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,

    logging: false,

    define: {
        freezeTableName: true,
        timestamps: false
    }
});

export default db;