const express       = require("express");
const cors          = require('cors');
const app           = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let usuario = null; //{nombre: "Jose", apellidos: "Garcia Garcia"}

app.get("/", 
        function(request, response)
        {
            let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
            response.send(respuesta);
        }
        );

// app.get("/usuario", 
//         function(request, response)
//         {
//             let respuesta;
//              if (usuario != null) 
//                 respuesta = usuario;
//              else
//                 respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}
            
//             response.send(respuesta);   
//         }
//         );


// app.get("/usuario/:name", 
//         function(request, response)
//         {
//             let name = request.params.name
//             if (usuario != null && name === usuario.nombre) 
//                 response.send(usuario);    
//             else  
//                 response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});      
//         }
//         );

app.get("/usuario", 
        function(request, response)
        {
            let name = request.query.name
            let respuesta;

            if (usuario != null && (!name || name === usuario.nombre))
                respuesta = usuario
            else 
                respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}

            response.send(respuesta);      
        }
        );

app.post("/usuario", 
        function(request, response)
        {
            let respuesta; 
            console.log(request.body)
            if (usuario === null)
            {
                usuario     = {nombre: request.body.nombre1, 
                               apellidos: request.body.apellido1}
                
                respuesta   = {error: false, codigo: 200, 
                               mensaje: 'Usuario creado',resultado: usuario};
            }
            else
                respuesta = {error: true, codigo: 200, 
                             mensaje: 'Usuario ya existe',resultado: null};

            response.send(respuesta);
        }
        );

app.put("/usuario",
        function(request, response)
        {
            let respuesta
            if (usuario !=  null)
            {
                usuario.nombre      = request.body.nombre1;
                usuario.apellidos   = request.body.apellido1;
                respuesta           = {error: false, codigo: 200, 
                                       mensaje: 'Usuario actualizado',resultado: usuario};
            }
            else
                respuesta = {error: true, codigo: 200, 
                             mensaje: 'El usuario no existe',resultado: usuario};

            response.send(respuesta);
        });

app.delete("/usuario",
           function(request, response)
           {
                let respuesta
                if (usuario != null)
                {    
                    usuario     = null;
                    respuesta   = {error: false, codigo: 200, 
                                   mensaje: 'Usuario borrado',resultado: usuario};
                }  
                else
                    respuesta   = {error: true, codigo: 200, 
                                   mensaje: 'El usuario no existe',resultado: usuario};

                response.send(respuesta);
            });

app.use(function(req,res,next)
        {
            respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
            res.status(404).send(respuesta);
        })

app.listen(3000);


