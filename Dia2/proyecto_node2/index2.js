import { writeFile } from "fs";
import { pregunta } from "./readConsole2";
import { escribir, leer } from "./writeAndReadObject2";


let objeto = {
    "name": "",
    "surname": "",
    "age": ""
};

// pedirObjecto(objeto, (leido)=>{
//     escribirObjeto(leido);
// });
pregunta("Nombre: ")
    .then((respuesta) =>{
        objeto.name = respuesta
        return pregunta("Apellido: ")
    })
    .then((respuesta) =>{
        objeto.surname = respuesta
        return pregunta("Edad: ")
    })
    .then((respuesta)=>{
        objeto.age = respuesta;
        return escribir('object.json',objeto)
    })
    .then(()=>{
        return leer('object.json')
    })
    .catch((err)=>{
        console.log(err);
    });