const http = require('http');

const server = http.createServer((request,response)=>{

    console.log('Petición recibida del cliente');
    console.log('Url: ' + request.url);
    console.log('Método: ' + request.method);
    console.log('Content-type: ' + request.headers['content-type']);
    console.log('Content-length: ' + request.headers['content-length']);
    console.log('User-agent: ' + request.headers['user-agent']);
    response.writeHead(200,{"ok":"true", "message":"Recibido!"})

    if(request.url == "/bye"){
        let mensaje = {
            "statusCode": 200,
            "message":{"ok":true, "message":"Adios!"}
        }
        response.write(JSON.stringify(mensaje));
    }else{
        let mensaje2 = {
            "statusCode": 200,
            "message": {"ok":true, "message":"Recibido!"}
        }
        response.write(JSON.stringify(mensaje2))
    }
    response.end();

})

server.listen(3000);