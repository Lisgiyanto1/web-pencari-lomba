// Package
const express = require("express");
const router = express.Router();

// Controller
const controller = require("./controllers/page");

// Route
router.get("/", controller.index);

module.exports = router;