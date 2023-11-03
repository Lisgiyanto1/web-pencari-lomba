// Package
const express = require("express");
const dotenv = require("dotenv");

// Inisialisasi .env
dotenv.config();

// Konfigurasi app
const app = express();
const { APP_PORT: port } = process.env;

// Routing
const route = require("./route");

// Express middleware
app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.json());

app.use("/",route);

// Start server
app.listen(port, () => {
    console.log("Sistem Informasi Lomba Kelompok 2");
    console.log(`Akses di port ${port}`);
});