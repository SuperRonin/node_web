var express = require('express')
var router = express.Router()
var ShopDB = require('../models/model/shop.js')
router.get('/',function(req, res){     
    res.send('hello world ~')
});

router.get('/shops',(req,res) => {
    console.log('update')
    ShopDB.query(res)
})

router.get('*',function(req, res){     //输入错误地址等情况
    res.end('<h1>404 Not Found!</h1>')
});

module.exports = router