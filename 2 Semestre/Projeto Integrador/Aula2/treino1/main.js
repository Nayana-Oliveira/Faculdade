import { calcularMedia } from './funcoes.js'

import promptSync from 'prompt-sync';
const ler = promptSync();

console.log('-- Programa de média --');

console.log('Informe a primeira nota:');
let nota1 = Number(ler());

console.log('Informe a segunda nota:');
let nota2 = Number(ler());

console.log('Informe a terceira nota:');
let nota3 = Number(ler());

let med = calcularMedia(nota1, nota2, nota3);

console.log("A média é: " +  med);