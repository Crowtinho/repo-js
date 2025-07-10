const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un número: "))

if(numero > 0){
    console.log("Es positivo");
}else if(numero < 0){
    console.log("Es negativo");
}else{
    console.log("Es cero");
}