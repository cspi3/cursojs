var http = require('http');
var url = "google.es";

    http.get({ host: url }, function(resOrigen) {

        http.createServer(function (req, res) {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("La respuesta de " +url+" es "+resOrigen.statusCode );
            console.log("La respuesta de " +url+" es "+resOrigen.statusCode );

        }).listen(8888, 'localhost');

        console.log('Servidor disponible en http://localhost:8888/');


    }).on('error', function(e) {

        http.createServer(function (req, res) {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("La respuesta de " +url+" genera un error - " + e.message  );

        }).listen(8888, 'localhost');

        console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');
        console.log("Tenemos un error!! - " + e.message);
    });