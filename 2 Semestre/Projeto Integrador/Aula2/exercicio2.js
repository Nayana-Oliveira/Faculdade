import prompt from 'prompt-sync';
const ler = prompt();

console.log('-- CONTADOR --');

console.log("Digite o primeiro número: ");
let inicio = Number(ler());

console.log("Digite o segundo número: ");
let fim = Number(ler());

if (inicio < fim) {
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
} else if (inicio > fim) {
    for (let i = inicio; i >= fim; i--) {
        console.log(i);
    }
}
