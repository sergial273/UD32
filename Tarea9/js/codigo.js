let func = (cadena) => {
    if (cadena === cadena.toUpperCase()) {
        return "solo por mayus";
    } else if (cadena === cadena.toLowerCase()) {
        return "solo por minus";
    } else {
        return "por mayus y minus";
    }
  }

let cade = prompt("Dime una frase:");
alert(func(cade));