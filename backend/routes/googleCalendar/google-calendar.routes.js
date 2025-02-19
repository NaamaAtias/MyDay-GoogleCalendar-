const express = require("express");
const { getEvents } = require("./google-calendar.controller");

const router = express.Router();

router.get("/events", getEvents);

module.exports = router;
