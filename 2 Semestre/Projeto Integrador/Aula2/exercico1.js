import prompt from 'prompt-sync';
const ler = prompt();

console.log('-- Programa da febre --');

let temp = Number(ler('Diga a sua temperatura: '));

let situacao = '';
if (etm >= 37.3) {
    situacao = 'Você está com febre';
} else {
    situacao = 'Você não está com febre';
}

console.log();
console.log(situacao);
