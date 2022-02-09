import * as fs from "fs";


// export function escribir(obj){

//     const escritura = new Promise((resolve,reject)=>{


        // fs.writeFile('object.json', objeto, ()=>{
        //     fs.readFile('object.json', )
        // })


        // fs.writeFile('object.json', objeto, (err)=>{
        //     if(err){              //if(!err){
        //         reject(err);      //const data =fs.readFile('object.json')
        //     }else{                //  let object =JSON.parse(data)
        //         resolve(objeto);  //  resolve(objeto)
        //     }                     //}else if(err){reject(err)}  
        // })
        
    // })
    // return escritura;
// }



//     let objeto = JSON.stringify(obj);  
//     fs.writeFile('object.json', objeto, (err) => {
//         if (err) throw err;
//         fs.readFile('object.json', (err, data) => {
//             if (err) throw err;
//             let object = JSON.parse(data);
//             console.log(object);
//         });
//     });



export function leer (fichero) {
    return new Promise(function (resolve, reject) {
      fs.readFile(fichero, 'utf8',(err, data)=> {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
  
  export function escribir (fichero, data) {
    return new Promise((resolve, reject)=> {
      fs.writeFile(fichero, data,(err)=> {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }