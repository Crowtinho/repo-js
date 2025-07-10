const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingrese su edad: "))

if(edad >= 18 ){
    console.log("Puede entrar");
    
}else{
    console.log("No puede entrar");
}