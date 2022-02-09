'use strict';
import readline from 'readline';

export function pedirObjeto(objeto,callback){  

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    
    rl.question("Nombre: ", (nameEscrito) => {
        objeto.name = nameEscrito;
            rl.question("Apellido: ", (apellidoEscrito) =>{
                objeto.surname = apellidoEscrito;
                rl.question("Edad: ", (edadEscrita)=>{
                    objeto.age = edadEscrita;
                    rl.close();
                    callback(objeto);
            });
        });
    });
        
}
