const express = require('express');
const router = express.Router();
const db = require('../../db');

router.post('/', (req,res) => {
    let body = req.body;
    db.func('user_login_check', [body.email, body.password]).then( (result) => {
        res.json(result[0].user_login_check);
    })
    .catch( error => {
        console.log(error);
    })
});

module.exports = router;