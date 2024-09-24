const express = require("express");
const router = express.Router();
const usersRoutes = require("./Users.js");

router.use("/", usersRoutes);

module.exports = router;