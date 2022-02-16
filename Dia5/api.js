const {profesionales, Professional} = require("./profesionales")
const express = require("express");
const { stringify } = require("querystring");
const cors          = require('cors');
const app           = express();
const PORT = 3000;


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

app.put("/profesionales/:id", (request,response)=>{

    let respuesta;
    let id = request.params.id;

        if (profesionales.indexOf(id)!==-1){

            let {name, age, genre, weight, height, hairColor, eyeColor, race,isRetired,
                    nationality, oscarsNumber, profession} = request.body
            let profesional = new Professional (name, age, genre, weight, height, hairColor, eyeColor, race,isRetired,
                nationality, oscarsNumber, profession)
            profesionales.push(profesional);
    
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