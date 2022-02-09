// import { writeFile } from "fs";
// import { pregunta } from "./readConsole2";
// import { escribir, leer } from "./writeAndReadObject2";
let read = require("./readConsole2");
let write = require("./writeAndReadObject2");

let objeto = {
    "name": "",
    "surname": "",
    "age": ""
};

read.leer(objeto)
    .then((data)=>{
        return write.readAndWrite(data);
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);  //reject(err)???
    })



// pedirObjecto(objeto, (leido)=>{
//     escribirObjeto(leido);
// });
// pregunta("Nombre: ")
//     .then((respuesta) =>{
//         objeto.name = respuesta
//         return pregunta("Apellido: ")
//     })
//     .then((respuesta) =>{
//         objeto.surname = respuesta
//         return pregunta("Edad: ")
//     })
//     .then((respuesta)=>{
//         objeto.age = respuesta;
//         return escribir('object.json',objeto)
//     })
//     .then(()=>{
//         return leer('object.json')
//     })
//     .catch((err)=>{
//         console.log(err);
//     });