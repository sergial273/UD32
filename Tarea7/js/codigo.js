var num = prompt("De que numero quieres calcular el factorial:",);
let x = 1

for (i=num; i>0; i--){
    x = x*i;
}

alert("el factorial de " + num + " es " + x);