// Model
// const user = require("../models/user");
import user from "../models/user.js";

// Controller
export async function index(req, res) {
    try {
        // Operasi CRUD disini
        await user.create({
            username: "hello",
            password: "minnasama",
            is_admin: false
        });
    }
    catch (error) {

    }

    try {
        // Buat lihat balik datanya
        let data = await user.findAll();
        res.status(200).json(data);
    } catch (e) {

    }
}