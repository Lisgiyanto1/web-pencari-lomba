// Model
const user = require("../models/user");

// Controller
async function index(req, res) {
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

    // Buat lihat balik datanya
    let data = await User.findAll();
    res.status(200).json(data);
}

module.exports = {
    index,
}