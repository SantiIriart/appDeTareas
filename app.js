const imprimirArchivo = require("./funcionesDeTareas");
const action = process.argv[2];

switch(action){
  case 'listar': imprimirArchivo("./tareas.json");
    break;
  case undefined: console.log('Atención-Tienes que pasar una acción.');
    break;
  default : console.log('No entiendo qué quieres hacer.');
//    break;
}


