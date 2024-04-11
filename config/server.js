var express =  require('express')

//var bodyParser = require('body-parser')

var app = express()

app.set('views', './app/views')
app.set('view engine', 'ejs')

app.use(express.static('./app/public'));
//app.use(bodyParser.urlencoded({extended:true}))



module.exports = app;