var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni = prompt("Cual es tu numero de dni",);
var letra = prompt("Cual es tu letra del dni",);

if (dni<0 || dni>99999999) alert("Numero incorrecto");

if (letra.toUpperCase() == letras[dni%23]) {
    alert("Numero i letra del dni correctos")
}
else{
    alert("La letra introducida es incorrecta")
}