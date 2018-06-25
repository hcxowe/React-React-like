var express = require("express");
var app = express();
var Mock = require('mockjs')
//var proxy = require('http-proxy-middleware');

app.use('/api/login', function(req, res) {
    res.json({
        error: 0,
        message: 'success'
    })
})

app.use('/api/getUsers', function(req, res) {
    
    var data = Mock.mock({
        error: 0,
        'data|10-20' : [{
            'userName': '@cname',
            'age': '@integer(20, 60)',
            'sex': function(){
                return Math.random() > 0.5 ? '男' : '女'
            }
        }] 
    })
    
    res.json(data)
})

app.listen(7035, () => {
    console.log('Listening on: http://localhost:7035');
});