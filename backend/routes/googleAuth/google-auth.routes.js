const express = require('express')
const { login, refresh } = require("./google-auth.controller");

const router = express.Router();

router.post("/login", login);
router.post("/refresh", refresh);

module.exports = router; 