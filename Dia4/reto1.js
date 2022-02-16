const { response } = require("express");
const express       = require("express");
const { request } = require("http");
// const cors          = require('cors');
const app           = express();
const PORT = 3000;

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

class Professional {
    
    //Definimos constructor
    constructor(name, age, genre, weight, height,
        hairColor, eyeColor, race, isRetired,
        nationality, oscarsNumber, profession, foto) {

        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;

    }
}

let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "img\bradPitt.png");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor", "img\denzel.png");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", ".img\scarlett.png");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz", ".img\angelina.png");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz", ".img\sophia.png");



// let profesional = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "img\bradPitt.png");
// let profesional = new Professional();
// console.log(profesional)
let profesional = null;
// console.log(profesional);

app.get("/profesional", (request,response)=>{
    let respuesta;
    if(profesional != null)
        respuesta = profesional;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no es valido"};

    response.send(respuesta)
});

app.post("/profesional", (request,response)=>{
    
    let respuesta;
    if (profesional === null){

        profesional = {name: request.body.nombre,
                       age: request.body.edad,
                       genre: request.body.genero,
                       weight: request.body.peso,
                       height: request.body.altura,
                       hairColor: request.body.colorPelo,
                       eyeColor: request.body.colorOjos,
                       race: request.body.raza,
                       isRetired: request.body.retirado,
                       nationality: request.body.nacionalidad,
                       oscarsNumber: request.body.oscars,
                       profession: request.body.profesion,
                       foto: request.body.foto
                      }

        respuesta = {error: false, codigo:200,
                     mensaje: 'Profesional creado', resultado: profesional};

    }else 
        respuesta = {error: true, codigo: 200,
                     mensaje: 'Profesional ya existe', resultado: null};
    
    response.send(profesional);
    // console.log(prof);


})

app.put("/profesional",
        function(request, response)
        {
            let respuesta
            if (profesional !=  null)
            {
                profesional.name      = request.body.nombre;
                profesional.age = request.body.edad;
                profesional.genre = request.body.genero;
                profesional.weight = request.body.peso;
                profesional.height = request.body.altura;
                profesional.hairColor = request.body.colorPelo;
                profesional.eyeColor = request.body.colorOjos;
                profesional.race = request.body.raza;
                profesional.isRetired = request.body.retirado;
                profesional.nationality = request.body.nacionalidad;
                profesional.oscarsNumber = request.body.oscars;
                profesional.profession = request.body.profesion;
                profesional.foto = request.body.foto;
                respuesta = {error: false, codigo: 200, 
                    mensaje: 'Profesional actualizado',resultado: profesional};
                console.log(profesional)
            }
            else
                respuesta = {error: true, codigo: 200, 
                             mensaje: 'El profesional no existe',resultado: profesional};

            response.send(respuesta);
        });

app.delete("/profesional",
           function(request, response)
           {
                let respuesta
                if (profesional != null)
                {    
                    profesional     = null;
                    respuesta   = {error: false, codigo: 200, 
                                   mensaje: 'Profesional borrado',resultado: profesional};
                }  
                else
                    respuesta   = {error: true, codigo: 200, 
                                   mensaje: 'El profesional no existe',resultado: profesional};

                response.send(respuesta);
                console.log(profesional)
            });

app.use(function(req,res,next)
        {
            respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
            res.status(404).send(respuesta);
        })




app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});