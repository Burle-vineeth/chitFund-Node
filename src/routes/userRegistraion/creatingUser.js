const express = require('express');
const router = express.Router();
const db = require('../../db');

router.post('/', (req, res) => {
    let body = req.body;
    db.func('add_user_to_users', [body.name, body.email, body.password, body.terms]).then( result => {
        res.json(result);
    })
    .catch( error => {
        console.log(error);
    })
})

module.exports = router;