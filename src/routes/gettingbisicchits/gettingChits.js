const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res, next) => {
    let userId = 1;
    db.func('getting_basic_chit_types', [userId]).then( (result) => {
        res.json(result);
    }).catch( error => {
        console.log(error.message);
        res.send(error);
    })
})

module.exports = router;