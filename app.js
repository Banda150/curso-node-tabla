const { crearArchivo } = require('./helpers/1.-multiplicar');
const argv = require('./yargs/yargs');

require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch (err => console.log(err) );