let numeros = [];
let numeros2 = [2, 6, 8];

// adicionar
numeros.push(10);
numeros.unshift(5);

// remover
numeros.pop();
numeros.shift();

// tamanho
let tam = numeros.length;

// ler
let a = numeros[1];

// alterar
numeros[1] = 11;


// iterar (ler todos os valores)
for (let item of numeros) {
  console.log(item);
}

for (let cont = 0; cont < numeros.length; cont++) {
  let item = numeros[cont];
  console.log(item);
}


// filtrar
let x1 = numeros.filter(item => item > 5);

// se pelo menos UM...
let x2 = numeros.some(item => item > 5);

// se TODOS...
let x3 = numeros.every(item => item > 5);

// pegar a posição
let x4 = numeros.findIndex(item => item == 2);

// transformar os itens
let x5 = numeros.map(item => item * 2);