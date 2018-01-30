var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req,res)=> {
	res.json({message: 'API Example App'})
});

app.get('/articles', (req, res) => {
	res.json({article:[]})
})

app.get('/article', (req, res)=> {
	article.findAll().then( (atricle) =>{
		res.json({article})
	})
})

app.post('/articles', (req,res) => {
	article.create({
		title: req.body.title
	}).then((article)=> {
		res.json({article: article})
	})
})

module.exports = app
