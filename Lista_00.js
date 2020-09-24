// 1. Faça um programa que leia dois números, calcule e imprima a soma desses dois
// números.
var number = [];
for (let index = 0; index < 2; index++) {
    number.push(Number(prompt()));
}

console.log(number[0] + number[1]);

// 2. Faça um programa que receba dois números, calcule e imprima a divisão do
// primeiro número pelo segundo.

var number = [];
for (let index = 0; index < 2; index++) {
    number.push(Number(prompt()));
}

console.log(number[0] / number[1]);

// 3. Faça um programa que leia um número e informe a metade e o dobro desse
// número.

var number = Number(prompt());

console.log(`Metade: ${number / 2 }, Dobro: ${number * 2}`);

// 4. Escrever um programa que permita receber o nome e a idade de uma pessoa e
// em seguida, informar o nome digitado e a idade da pessoa daqui a 30 anos.

var pessoa = {
    'nome': prompt('Nome da pessoa:'),
    'idade': prompt('Idade da pessoa')
}

console.log(`Nome: ${pessoa.nome}, Idade daqui a 30 anos: ${pessoa.idade + 30}`);

// 5. Faça um programa que leia três notas de um aluno, calcule e imprima a média
// aritmética entre essas notas.

var notas = [];

for (let index = 0; index < 3; index++) {
    notas.push(Number(prompt(`Digite a nota ${index + 1} do aluno`)));
}

console.log(`A média do aluno foi ${notas.reduce((a, b) => a + b) / notas.length}`);

// 6. Faça um programa que receba dois números inteiros, calcule e imprima:

var number = [];
for (let index = 0; index < 2; index++) {
    number.push(Number(prompt()));
}

// a. Soma dos dois números;

console.log(number[0] + number[1]);

// b. Subtração do primeiro pelo segundo;

console.log(number[0] - number[1]);

// c. Subtração do segundo pelo primeiro;

console.log(number[1] - number[0]);

// d. Produto dos dois números;

console.log(number[0] * number[1]);

// e. Divisão do primeiro pelo segundo;

console.log(number[0] / number[1]);

// f. Quociente inteiro da divisão do primeiro pelo segundo;

console.log(parseInt(number[0] / number[1]));

// g. Resto da divisão do primeiro pelo segundo.

console.log(number[0] % number[1]);