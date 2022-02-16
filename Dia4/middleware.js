const express = require("express")
const app = express()

app.use(function (request, response, next)
{
    console.log("Hola desde el middleware global")
    next();
});

app.use("/ruta", function (request, response, next)
{
    console.log("Hola desde el middleware de /ruta")
    next(); 
});

app.get("/ruta/a", 
    function (request, response, next)
    {
        console.log("Hola desde el middleware de /ruta/a")
        next(); 
    },
    function (request, response)
    {
        response.send("Hola desde /ruta/a")
    })

app.listen(4000)