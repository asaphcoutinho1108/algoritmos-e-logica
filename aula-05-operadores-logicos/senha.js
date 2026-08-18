// Rodar (pacote para funcionar no terminal )
// npm install prompt-sync

// importa para meu programa
const prompt = require('prompt-sync')();

//declarar variaveis
let nomeusuario = prompt("informe o nome do usuario: ")
let senha = prompt("informe a senha: ")
console.log("")

// simulando dados referencia (normalmente seriam trazidos do Bd)
let loginbanco = "Coutinho"
let senhabanco = "coutinho1108"

//logica para definir se o usuario digitou os dados corretos
if (nomeusuario === loginbanco && senha === senhabanco) {
    console.log("acesso autorizando")
} else{
    console.log("acesso negado!")
}
