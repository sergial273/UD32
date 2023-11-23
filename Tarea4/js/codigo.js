var valores = [true, 5, false, "hola", "adios", 2];

// Encontrar el elemento de texto mayor
var textoMayor = (valores[3].length > valores[4].length) ? valores[3] : valores[4];

console.log("El elemento de texto mayor es: " + textoMayor);


//obtener true
var resultadoTrue = valores[0] || valores[2];

//obtener false
var resultadoFalse = valores[0] && valores[2];

console.log("Resultado True: " + resultadoTrue);
console.log("Resultado False: " + resultadoFalse);


var num1 = valores[1];
var num2 = valores[5];

// realizar las operaciones
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

console.log("suma: " + suma);
console.log("resta: " + resta);
console.log("mult: " + multiplicacion);
console.log("div: " + division);
console.log("modulo: " + modulo);