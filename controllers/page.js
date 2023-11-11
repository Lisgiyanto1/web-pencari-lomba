// Controllers
import * as UserController from "./user.js";

// Page Controller
export async function index(req, res) {
    try {
        let data = await UserController.r();
        res.status(200).json(data);
    } catch (e) {

    }
}