const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res, next) => {
    let param = parseInt(req.originalUrl.substring(6));
    db.func('getting_basic_chit_item', [param]).then( (result) => {
        res.json(result);
    }).catch( (error) => {
        res.json(error);
    })
})

module.exports = router;