import prompt from 'prompt-sync'
const ler = prompt();

console.log('== PROGRAMA DA MÉDIA ==');

console.log('Informe a primeira nota:');
let nota1 = Number(ler());

console.log('Informe a segunda nota:');
let nota2 = Number(ler());

console.log('Informe a terceira nota:');
let nota3 = Number(ler());

let media = (nota1 + nota2 + nota3) / 3;

let situacao = '';
if (media >= 6) {
  situacao = 'Aprovado';
}
else {
  situacao = 'DP';
}

console.log(`
  == RESULTADO ==
  Média: ${media} 
  Situação: ${situacao}
`);

