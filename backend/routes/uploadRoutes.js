const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
    uploadFile,
    getFiles
} = require("../controllers/uploadController");

router.post("/", upload.single("file"), uploadFile);

router.get("/", getFiles);

module.exports = router;