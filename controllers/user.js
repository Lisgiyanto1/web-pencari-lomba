// Model
import User from "../models/user.js";

// User Controller
export async function c(req, res) {
    await User.sync();

    try {
        // Test
        await User.create({
            username: Math.floor(Math.random() * 16777216).toString(16),
            password: Math.floor(Math.random() * 16777216).toString(16)
        })
    }
    catch (e) {

    }
    res.redirect("/");
}

export async function r(req, res) {
    await User.sync();

    try {
        let data = await User.findAll();

        return data;
    }
    catch (e) {
        return [];
    }
}

export async function u(req, res) {
    await User.sync();
}

export async function d(req, res) {
    await User.sync();
}
