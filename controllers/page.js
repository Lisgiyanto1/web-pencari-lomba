// Controllers
import * as UserController from './user.js';
import StatusModel from '../models/statusModel.js';
// Page Controller
export async function index(req, res) {
  try {
    let data = await UserController.r();
    res.status(200).json(data);
  } catch (e) {}
}

//coba
export async function c(req, res) {
  try {
    // Operasi create diubah untuk mengambil status dari statusModel
    const status = StatusModel.getStatus();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan' });
  }
}
