const express = require("express");
const mailHandler = require('../controllers/mailHandler');
const router = express.Router();

router.post('/sendmail', mailHandler.sendMail);
module.exports = router;
