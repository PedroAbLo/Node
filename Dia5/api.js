// const {profesionales, Professional} = require("./profesionales")
const express = require("express");
const cors          = require('cors');
const app           = express();
const PORT = 3000;
'use strict';

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
        // this.foto = foto;

    }
}
let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "img\bradPitt.png");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor", "img\denzel.png");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", ".img\scarlett.png");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz", ".img\angelina.png");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz", ".img\sophia.png");

let profesionales = [actor1,actor2,actor3,actor4];




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.get("/profesionales", 
        function(request, response)
        {  
            let id = request.query.id;

            if(id === undefined){

                let respuesta;
                if (profesionales != null)
                    respuesta = profesionales;
                else 
                    respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
    
                response.send(respuesta);  
                console.log(respuesta);  
            }else{

                let respuesta;
                if (profesionales[id] != null)
                    respuesta = profesionales[id];
                else 
                    respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
    
                response.send(respuesta);  
                console.log(respuesta);  
            }
  
        }
        );

app.post("/profesionales", (request,response)=>{

    let respuesta;

        let {name, age, genre, weight, height, hairColor, eyeColor, race,isRetired,
                nationality, oscarsNumber, profession} = request.body
        let profesional = new Professional (name, age, genre, weight, height, hairColor, eyeColor, race,isRetired,
            nationality, oscarsNumber, profession)
        profesionales.push(profesional);

        respuesta = {error: false, codigo:200,
                        mensaje: 'Profesional creado', resultado: profesional};

    
    // response.send(profesionales);
    response.send(respuesta);
    // console.log(profesionales);
    console.log(respuesta);


})

app.put("/profesionales", (request,response)=>{

    let respuesta;
    let id = request.body.id;
    // id se pasa por body

        if (profesionales.length > id){

            let {name, age, genre, weight, height, hairColor, eyeColor, race,isRetired,
                    nationality, oscarsNumber, profession} = request.body
            let profesional = new Professional (name, age, genre, weight, height, hairColor, eyeColor, race,isRetired,
                nationality, oscarsNumber, profession)
            profesionales[id] = profesional;
    
            respuesta = {error: false, codigo:200,
                            mensaje: 'Profesional actualizado', resultado: profesional};
    
        }else 
            respuesta = {error: true, codigo: 400,
                            mensaje: 'Profesional no existe'};
        
        response.send(respuesta);
        console.log(respuesta);

})


app.delete("/profesionales",
function(request, response)
{
    let id = request.body.id;
    //id se pasa por body
    let respuesta
    if (profesionales[id] != null)
    {    
        profesionales.splice(id, 1);
        // Utilizar método para quitar elemento array.
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