const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../config');
let transport = nodemailer.createTransport(config.smtp);

router.post('/send', function (req, res) {
    var mailOptions = req.body;
    transport.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(info);
        }
    });
});

module.exports = router;
