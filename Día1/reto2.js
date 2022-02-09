'use strict';

const fs = require('fs');

let objeto = {
    name:"oliver",
    surname:"abenza",
    age: 14
};

let data = JSON.stringify(objeto, null, 2);

fs.writeFile('object.json', data, (err) => {
    if (err) throw err;
});

fs.readFile('object.json', (err, data) => {
    if (err) throw err;
    let object = JSON.parse(data);
    console.log(object);
});


