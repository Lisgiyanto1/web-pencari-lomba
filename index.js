// Package
import express from 'express';
import dotenv from 'dotenv';

// Inisialisasi .env
dotenv.config();

// Konfigurasi app
const app = express();
const port = process.env.PORT || 3000;

// Routing
import route from './routes/web.js';

// Express middleware
app.set('view engine', 'ejs');

app.use(express.static('./public/views'));
app.use(express.json());

app.use('/', route);

// Start server
app.listen(port, () => {
  console.log('Sistem Informasi Lomba Kelompok 2');
  console.log(`Akses di port ${port}`);
});
