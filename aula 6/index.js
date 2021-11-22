//Como temos muitas vezes o nome João, a gente pode criar variaveis, com let

let nome= 'João'; //string

//abaixo a gente pode mudar o João por nome, e td vez que meu js for procurar por João a gente podecolocar nome

//abaixo vemos o exemplo sem usar a variável

//console.log('João nasceu em 1984.');
//console.log('Em 2000 João conheceu Maria.');
//console.log('João casou-se com Maria em 2014.');
//console.log('Maria teve um filho com João em 2015.');
//console.log('O filho de João se chama Eduardo.');

//nesse exemplo vemos usando a variável nome

console.log( nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2014.');
console.log('Maria teve um filho com' ,nome, 'em 2015.');
console.log('O filho de' ,nome, 'se chama Eduardo.');

//Aí sempre que eu quiser alterar o nome, eu posso ir na variável que tds variáveis nome serão alteradas

//não podemos criar palavras reservadas por exemplo nome com let, if, console etc
// variáveis precisam ter nomes significativos
//Não pode começar uma variável com número
//nome da variável n pode ter espaço ou traço
//utilizamos camelCase
//as veriáveis são case sensitive=as variáveis maiúsculas e minúsculas fazem diferença
//NÃO UTILIZE VAR, UTILIZE LET