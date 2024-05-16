var app = require("./config/server")

//var rotaHome = require("./app/router/home")(app)

var rotaHome = require("./app/router/home")(app)

app.listen(3000, ()=>{
    console.log("Server up")
})