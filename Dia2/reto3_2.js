const fs = require('fs/promises');
const readline = require('readline');


let objeto = {
    name:"",
    surname:"",
    age:""
};

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
        return fs.writeFile('object.json', JSON.stringify(objeto));
    })
    .then(()=>{
        return fs.readFile('object.json','utf8');
    })
    .then(()=>{
        let object = JSON.parse(JSON.stringify(objeto));
        console.log(object);
    })
    .catch((err) =>{        
        console.log(err);
    });


 
    




