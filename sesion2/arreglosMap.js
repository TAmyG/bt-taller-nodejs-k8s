const listaEnteros = [1, 2, 3, 4, 5, 6];

// Filter
const listaAlCuadrado = listaEnteros.map((valor) => {
    const valorCuadrado = valor * valor;
    return valorCuadrado
});

console.log(listaAlCuadrado);