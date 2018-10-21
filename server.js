var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 跨域
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With')
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
	res.header('X-Powered-By', ' 3.2.1')
	res.header('Content-Type', 'application/json;charset=utf-8')
	next()
})

app.get('/api/products', function(req, res) {
	fs.readFile(path.resolve(__dirname, 'db/products.json'), 'utf-8', function(
		err,
		data
	) {
		if (err) console.log(err)
		res.send(data)
	})
})
// 监听
app.listen(3000, function() {
	console.log('mock server successed listening at 3000')
})
