const express = require('express');
const router = express.Router();
const db = require('../../db');

router.post('/', (req, res, next) => {
    db.func('reset_password', [req.body.email, req.body.password, parseInt(req.body.otp)]).then( (result) => {
        res.json(result[0].reset_password);
    }).catch( (error) => {
        res.json(error);
    });
});

module.exports = router;