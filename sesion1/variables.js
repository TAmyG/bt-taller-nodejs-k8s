// Se pueden declarar variables con const, let y var
const MYCONSTANTE1 = 123;

var var2 = 'variable global'
function fun1() {
    let var1 = 'variable de contexto';
    console.log('Hola desde fun1', var1)

}

console.log(MYCONSTANTE1, var2);
fun1();