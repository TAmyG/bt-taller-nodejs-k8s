// Desestructuracion de objetos
let objeto = {
    id: 123,
    nombre: 'Cesar',
    edad: 20,
    listaNumeros: [1, 2, 3, 4, 5]
}

const { nombre, listaNumeros, tipo } = objeto;


console.log(nombre, listaNumeros, tipo);


// Otro tipo
const [var1, var2, , , var5] = listaNumeros;
console.log(var1, var2, var5);