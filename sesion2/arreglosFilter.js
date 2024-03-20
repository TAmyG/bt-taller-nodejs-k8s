const listaEnteros = [1, 2, 3, 4, 5, 6];

// Filter
// const listaFiltrada = listaEnteros.filter((valor) => {
//     const residuo = valor % 2;
//     if (residuo === 0) {
//         return true;
//     }
//     return false;
// });

const listaFiltrada = listaEnteros.filter((valor) => (valor % 2 === 0));
console.log(listaFiltrada);