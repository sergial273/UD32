let palindromo = (cadena) => {
  var re = /[\W_]/g;
  var minus = cadena.toLowerCase().replace(re, '');
  var reves = minus.split("").reverse().join("");
  return minus === reves;
};

let cade = prompt("Dime una frase:");
alert(palindromo(cade));
