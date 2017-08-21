/**
 * Created by zxw on 17-8-20.
 */

var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('main/index');
});

module.exports = router;