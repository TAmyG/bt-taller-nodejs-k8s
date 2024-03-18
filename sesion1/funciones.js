function funcion1() {
    return '1';
}

// Arrow Functions
const funcion2 = (param1 = 0, param2 = 1) => (param1 + param2 + funcion1())

console.log(funcion1(), funcion2('1', 2))
