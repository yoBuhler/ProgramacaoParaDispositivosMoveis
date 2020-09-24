// 1. Criando um Triângulo com Loop
// a. Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte
// triângulo.
// b. Dicas:
// i. Você pode começar com um programa que simplesmente imprimi os números de 1 a
// 7, que você pode derivar fazendo pequenas modificações do exemplo dado
// anteriormente que "imprimi cada número", quando o loop for foi introduzido.
// ii. Agora considere a equivalência entre números e strings do caracter hash. Você pode
// ir de 1 para 2 adicionando 1 (+= 1). Você pode ir de "#" para "##" adicionando o
// caracter (+= "#"). Assim, sua solução pode ser próxima do programa de impressão de
// números.

var c = '';
for (let i = 0; i < 7; i++) {
    c += '#';
    console.log(c);
}


// 2. FizzBuzz
// a. Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100,
// exceto que, para números divisíveis por 3, ele imprima Fizz ao invés do número, e para
// números divisíveis por 5 (e não 3), ele imprima Buzz.
// b. Quando você tiver o programa funcionando, modifique-o para imprimir FizzBuzz para
// números que são divisíveis por ambos os números 3 e 5.
// c. (Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem
// significativa de candidatos programadores. Então, se você resolvê-la, você está autorizado
// de se sentir bem consigo mesmo).
// d. Dica:
// i. Passar por números claramente é um trabalho para um loop. E selecionar o que
// imprimir é um assunto da execução condicional. Lembre-se que o truque de usar o
// operador restante % para checar se um número é divisível por outro número (tem
// resto zero).
// ii. A segunda versão do programa pode ser resolvida de forma simples (apenas
// adicionando outro "ramo" que precisamente testa a condição dada), ou de forma
// mais inteligente (construindo uma cadeia de caracteres contendo a palavra para
// saída, e imprimindo esta palavra ou o número, se não houver palavra,
// potencialmente fazendo uso do elegante operador ||).

for (let i = 0; i < 100; i++) {
    console.log(i % 3 == 0 || i % 5 == 0 ? 'FizzBuzz' : (i + 1));
}

// 3. Tabuleiro de Xadrez
// a. Escreva um programa que cria uma string que representa uma grade 8x8, usando novas
// linhas para separar os caracteres. A cada posição da grade existe ou um espaço ou um
// caracter “#”, de forma que estes caracteres formem um tabuleiro de xadrez.
// b. Passando esta string para console.log, ela deverá se parecer com isso:
// c. Quando isso funcionar, defina uma variável tamanho = 8, e mude o programa para que o
// mesmo funciona para qualquer tamanho, retornando uma grade com a largura e altura
// fornecida.
// d. Dicas:
// i. Esta string pode ser feita começando com valor vazio ("") e adicionando caracteres
// repetidamente depois disso. O caracter de nova linha é escrito como \n.
// ii. Use o console.log para inspecionar a saída do seu programa.
// iii. Para se fazer algo com duas dimensões, você vai precisar de um loop dentro de
// outro loop. Coloque chaves envolta do corpo dos loops para tornar fácil de se ver
// onde eles começam e onde terminam. Tente indentar corretamente o corpo destes
// loops. A ordem dos loops deve seguir a ordem em que nós escrevemos a string (linha
// por linha, esquerda para direita, cima para baixo). Então o outro loop manipula as
// linhas e o loop interno lida com os caracteres em uma linha. Você vai precisar de
// duas variáveis para rastrear seu progresso. Para saber se coloca um espaço ou um
// símbolo hash (#) em determinada posição, você pode testar se a soma dos dois
// contadores é ainda (% 2).
// iv. Terminando a linha, adicione um caracter de nova linha depois que esta estiver
// pronta, assim depois do loop interno, faça o loop externo.

var a = '';
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        a += (i + j) % 2 == 0 ? '#' : ' ';
    }
    a += '\n';
}

console.log(a);