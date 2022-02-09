
import * as fs from 'fs';

export function escribirObjeto(obj){
    let objeto = JSON.stringify(obj);  
    fs.writeFile('object.json', objeto, (err) => {
        if (err) throw err;
        fs.readFile('object.json', (err, data) => {
            if (err) throw err;
            let object = JSON.parse(data);
            console.log(object);
        });
    });
}
