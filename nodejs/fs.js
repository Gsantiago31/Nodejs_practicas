const fs = require('fs');

fs.writeFile('./texto.txt', 'Información dentro del archivo', function(err){
    if(err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');

fs.readFile('./texto.txt', function(err, data) {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})
