// Package
import { Router } from "express";
const router = Router();

// Controller
import * as PageController from "../controllers/page.js";
import * as UserController from "../controllers/user.js";

// Route
router.get("/", PageController.index);
router.get("/create", UserController.c);

export default router;