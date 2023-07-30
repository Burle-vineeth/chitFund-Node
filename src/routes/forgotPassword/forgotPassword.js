const express = require('express');
const router = express.Router();
const db = require('../../db');
const sgMail = require('@sendgrid/mail');

const apiKey = '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';

router.post('/',  async (req, res, next) => {
    let number = Math.floor(100000 + Math.random() * 900000);
    db.func('send_forgot_otp', [req.body.email, number]).then( async (result) => {
        if(result[0].send_forgot_otp) {
            sgMail.setApiKey(apiKey);
            const message = {
                to: req.body.email,
                from: 'vineethburle@gmail.com',
                subject: 'Hello from sendgrid',
                text: `OTP : ${number}`,
                html: `<h1>OTP : ${number}</h1>`,
            }
            sgMail.send(message).then( (response) => {
                console.log('Email sent...');
            }).catch( (error) => {
                console.log(error);
            })
        }
        res.json(result[0].send_forgot_otp);
    }).catch( (error) => {
        res.json(error);
        console.log(error);
    })
})

module.exports = router;