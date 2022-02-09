'use strict';
const fs =  require('fs/promises')
// const fs = require('fs');

let objeto = {
    name:"oliver",
    surname:"abenza",
    age: 14
};

let data = JSON.stringify(objeto);

fs.writeFile('object.json', data)
.then(()=>{
    return fs.readFile('object.json','utf8');
})
.then(data =>{
    let object = JSON.parse(data);
    console.log(object);
})
.catch(err => {
    console.log(err);
})
