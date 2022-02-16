const { response } = require("express");
const express       = require("express");
const { request } = require("http");
const { stringify } = require("querystring");
// const cors          = require('cors');
const app           = express();
const PORT = 3000;

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

let profesionales = [actor1,actor2,actor3,actor4,actor5];

app.get("/profesionales",function(request,response){
    response.send(profesionales);
});

app.get("/profesionales", 
        function(request, response)
        {
            let id = request.query.id;
            let respuesta;

            if (profesionales[id] != null)
                respuesta = profesionales[id];
            else 
                respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}

            response.send(respuesta);  
            console.log(respuesta);    
        }
        );

        app.post("/profesionales", (request,response)=>{
    
            let respuesta;
            if (profesionales.indexOf(stringify(request.body.name)  !==1)){
        
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
                profesionales.push(profesional);
        
                respuesta = {error: false, codigo:200,
                             mensaje: 'Profesional creado', resultado: profesional};
        
            }else 
                respuesta = {error: true, codigo: 200,
                             mensaje: 'Profesional ya existe', resultado: null};
            
            response.send(profesionales);
            console.log(profesionales);
        
        
        })

app.put("/profesionales",
function(request, response)
{
    let id = request.query.id;
    let respuesta
    if (profesionales[id] !=  null)
    {
        profesionales[id].name = request.body.nombre;
        profesionales[id].age = request.body.edad;
        profesionales[id].genre = request.body.genero;
        profesionales[id].weight = request.body.peso;
        profesionales[id].height = request.body.altura;
        profesionales[id].hairColor = request.body.colorPelo;
        profesionales[id].eyeColor = request.body.colorOjos;
        profesionales[id].race = request.body.raza;
        profesionales[id].isRetired = request.body.retirado;
        profesionales[id].nationality = request.body.nacionalidad;
        profesionales[id].oscarsNumber = request.body.oscars;
        profesionales[id].profession = request.body.profesion;
        profesionales[id].foto = request.body.foto;
        respuesta = {error: false, codigo: 200, 
            mensaje: 'Profesional actualizado',resultado: profesionales};
        console.log(profesional)
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El profesional no existe',resultado: profesionales};

    response.send(respuesta);
});


app.delete("/profesionales",
function(request, response)
{

    let id = request.query.id;
    let respuesta
    if (profesionales[id] != null)
    {    
        profesionales[id]= null;
        respuesta   = {error: false, codigo: 200, 
                    mensaje: 'Profesional borrado',resultado: profesionales};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                    mensaje: 'El profesional no existe',resultado: profesionales};

    response.send(respuesta);
    console.log(profesionales);
});






app.use(function(req,res,next)
{
    respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
    res.status(404).send(respuesta);
})





app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Servidor en puerto ", PORT);
});