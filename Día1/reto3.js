'use strict';
const fs = require('fs');
// const readline = require('readline');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let objeto = {
    name:"",
    surname:"",
    age:""
};

 rl.question("Nombre: ", (nameEscrito) => {
    objeto.name = nameEscrito;
    rl.question("Apellido: ", (apellidoEscrito) =>{
        objeto.surname = apellidoEscrito;
        rl.question("Edad: ", (edadEscrita)=>{
            objeto.age = edadEscrita;
            let data = JSON.stringify(objeto);            
            fs.writeFile('object.json', data, (err) => {
                if (err) throw err;
                fs.readFile('object.json',(err,data) => {
                    if (err) throw err;
                    let object = JSON.parse(data);
                    console.log(object);
                    process.exit();
                });
            });
        });
    });
});







