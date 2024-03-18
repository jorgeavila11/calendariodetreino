var express =  require('express')

var app = express()

app.set('views', './app/views')
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('home/index')
})

//app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('./app/public'));

app.listen(3000, ()=>{
    console.log("Server up")
})