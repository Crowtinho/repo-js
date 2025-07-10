const prompt = require("prompt-sync")();

let tabla = parseInt(prompt("ingrese un número entero de la tabla que quiere ver: "))
console.log("tabla del ",tabla);

for(let i =1; i<=10;i++){
    console.log(tabla," X ",i," = ", (tabla  * i));
}