const express = require("express");

const router = express.Router();

const {
    saveMessage,
    getMessages
} = require("../controllers/dataController");

router.post("/", saveMessage);

router.get("/", getMessages);

module.exports = router;