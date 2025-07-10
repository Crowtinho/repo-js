const prompt = require("prompt-sync")();

let password = "1234"
let ingreso = prompt("Ingrese contraseña: ")

while(password!= ingreso){
    console.log("contraseña incorrecta!!!");
    ingreso = prompt("Ingrese contraseña: ")
}

console.log("Felicidades pasaste!!!!");
