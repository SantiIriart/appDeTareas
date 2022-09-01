const fs = require('fs');

function imprimirArchivo(ruta){
    const archivo = fs.readFileSync(ruta,"utf-8");
    const arreglo = JSON.parse(archivo);
    console.table(arreglo);
}

module.exports = imprimirArchivo;
