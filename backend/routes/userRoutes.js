const express = require("express");
const { handleWebhook } = require("../controllers/userController");

const router = express.Router();

router.post("/webhooks/clerk", handleWebhook);

module.exports = router;
