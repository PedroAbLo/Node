// 'use strict'
// import readline from 'readline';
let fs = require('fs/promises');
const { resolve } = require('path/posix');
const readline = require('readline');


function pregunta(pregunta){
    const question = new Promise((resolve,reject)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          rl.question(pregunta,(respuesta)=>{
              resolve(respuesta);
              rl.close();
          })
    })
    return question;
}

function leer(obj){
    const promesa = new Promise((resolve,reject)=>{
        pregunta("Nombre: ")
            .then((respuesta)=>{
                obj.name = respuesta;
                return pregunta("Apellido: ")
            })
            .then((respuesta)=>{
                obj.surname = respuesta;
                return pregunta("Edad: ")
            })
            .then((respuesta)=>{
                obj.age = respuesta;
                resolve(obj);
            })
            .catch((err)=>{
                reject(err);
            })
    })
    return promesa;
}


module.exports = {pregunta, leer}