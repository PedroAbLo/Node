const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, resolve) =>{
    console.log('Petición recibida del cliente');
    console.log('Url: ' + request.url);
    console.log('Método: ' + request.method);
    console.log('Url: ' + request.headers['user-agent']);
    // resolve.send("hello from server");
    resolve.send(200,{"ok":"true", "message":"Recibido!"})
    response.end;
});

app.get('/bye', (request,resolve)=>{
    resolve.send(200,{"ok":"true", "message":"Adios!"})
    response.end;
})

app.listen(7000);