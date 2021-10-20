const http = require('http');

//Forma principal
// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     res.write('<h1>Hola Mundo desde Node.js</h1>');
//     res.end();
// }).listen(3000);

//Forma ordenada
const handleServer = function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo desde Node.js</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000');
});
