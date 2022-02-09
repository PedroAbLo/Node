import { escribirObjeto } from "./writeAndReadObject.js"; 
import { pedirObjeto } from "./readConsole.js";


let objeto = {
    name:"",
    surname:"",
    age:""
};

pedirObjeto(objeto, (leido)=>{
    escribirObjeto(leido);
});

