// Package
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Inisialisasi .env
dotenv.config();

// Ambil info db dari .env
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

// Koneksi tapi bukan .php
const db = new Sequelize(DB_NAME, DB_USER, DB_PASS,
    {
        dialect: 'mysql',
        host: DB_HOST,
        logging: false
    }
);

export default db;