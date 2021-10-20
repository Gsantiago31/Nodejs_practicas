const math = require('./math');

const colors = require('colors');

const express = require('express');

// console.log(math);

// console.log(math.add(1, 2));
// console.log(math.substract(1, 2));
// console.log(math.multiply(1, 2));
// console.log(math.divide(1, 2));
// console.log(math.divide(1, 0));

const server = express();

server.get('/', function (req, res){
    res.send('<h1>Hola mundo con express</h1>');
})
server.listen(3000, () => {
    console.log("Server on port 3000".red);
})
