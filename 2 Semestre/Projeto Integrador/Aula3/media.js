import prompt from 'prompt-sync';
const ler = prompt();

console.log('-- MÉDIA --');

console.log('Informe a quantidade de notas:');
let qtd = Number(ler());

let notas = [];

for (let cont = 0; cont < qtd; cont++) {
  console.log('Informe a nota:');
  let nota = Number(ler());

  notas.push(nota);
}


let soma = 0;
for (let item of notas) {
  soma += item;
}
let media = soma / notas.length;


let sit = '';
if (media >= 6) sit = 'Aprovado'
else sit = 'DP'


let maior = 0;
for (let item of notas) {
  if (item > maior)
    maior = item;
}


let zeros = notas.filter(item => item == 0).length;


console.log(`
-- RESULTADO --

Média: ${media}
Situação: ${sit}
Maior Nota: ${maior}
Quantidades de Zeros: ${zeros}
`)