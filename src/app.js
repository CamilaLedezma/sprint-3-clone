const express = require('express');
const app = express();
const mainRutas = require("./routes/mainRoutes")
app.use(express.static('../public'));
app.set('view engine', "ejs");
app.set("views", "../views")

app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});

app.use("/", mainRutas);
