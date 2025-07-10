const prompt = require("prompt-sync")();

let nacimiento = prompt("Ingrese su año de nacimiento: ")

let edad = 2025 - nacimiento

console.log("su edad es de: ",edad," años")
