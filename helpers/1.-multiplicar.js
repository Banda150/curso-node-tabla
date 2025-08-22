
const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {//-------------->Las funciones async siempre regresan una promesa.
    try {

    let salida = '';

for (let i= 1; i<=hasta; i++){
    salida += `${base} x ${i} = ${base*i}\n`;
}
        if(listar){
    
    console.log('================================================================='.green)
    console.log('                            tabla del:'.green, colors.blue(base)                      )
    console.log('================================================================='.green)

    console.log(salida);
}



fs.writeFileSync(`tabla-${base}.txt`, salida);


        return `tabla-${base}.txt`;//------------------------>Si la función async no devuelve explícitamente una promesa, el valor de retorno se envuelve automáticamente en una promesa.
    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}
