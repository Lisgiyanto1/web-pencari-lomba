// Package
import express from "express";
const router = express.Router();

// Controller
import * as controller from "./controllers/page.js"

// Route
router.get("/", controller.index);

export default router;