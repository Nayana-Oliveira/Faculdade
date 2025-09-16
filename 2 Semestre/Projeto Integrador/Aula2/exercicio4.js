import promptSync from 'prompt-sync';
const ler = promptSync();

console.log('-- Triângulo --');

console.log("Digite a altura do triângulo: ");
let tam = Number(ler());

for (let i = 1; i <= tam; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('* ');
    }
    console.log(); // quebra de linha
}


// outro modo
// import promptSync from 'prompt-sync';
// const prompt = promptSync();
// console.log('-- Triângulo --');
// const altura = parseInt(prompt("Digite a altura do triângulo: "));
// for (let i = 1; i <= altura; i++) {
    //let linha = "";
    //for (let j = 1; j <= i; j++) {
    //    linha += "*";
    //}
   // console.log(linha);
//}
