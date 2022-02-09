'use strict'
import readline from 'readline';


export function pregunta(pregunta){
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
