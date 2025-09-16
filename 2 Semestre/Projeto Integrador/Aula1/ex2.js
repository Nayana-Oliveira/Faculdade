import prompt from 'prompt-sync'
const ler = prompt();

console.log('== PROGRAMA DA SOMA ==');

console.log('Informe o primeiro número:');
let n1 = Number(ler());

console.log('Informe o segundo número:');
let n2 = Number(ler());

let soma = n1 + n2;

console.log('A soma é: ' + soma);