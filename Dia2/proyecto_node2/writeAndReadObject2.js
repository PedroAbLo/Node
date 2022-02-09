let fs = require('fs/promises');
// let readline = require('readline')


function readAndWrite(obj){

  const archivo = new Promise((resolve,rejects)=>{
    let objeto = JSON.stringify(obj);
    fs.writeFile('object.json', objeto)
      .then(()=>{
        return fs.readFile('object.json','utf-8')
      })
      .then((data)=>{
        resolve(JSON.parse(data));
      })
      .catch((err) =>{
        rejects(err);
      })
  })
  return archivo;
}

module.exports = { readAndWrite}



// PRUEBA1-VARIAS
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

// PRUEBA 2

//     let objeto = JSON.stringify(obj);  
//     fs.writeFile('object.json', objeto, (err) => {
//         if (err) throw err;
//         fs.readFile('object.json', (err, data) => {
//             if (err) throw err;
//             let object = JSON.parse(data);
//             console.log(object);
//         });
//     });

// CON DOS FUNCIONES LEER Y ESCRIBIR

// export function leer (fichero) {
//     return new Promise(function (resolve, reject) {
//       fs.readFile(fichero, 'utf8',(err, data)=> {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(data)
//         }
//       })
//     })
//   }
  
//   export function escribir (fichero, data) {
//     return new Promise((resolve, reject)=> {
//       fs.writeFile(fichero, data,(err)=> {
//         if (err) {
//           reject(err)
//         } else {
//           resolve()
//         }
//       })
//     })
//   }