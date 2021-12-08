
//Operadores aritméticos

// + (adiçao e concatenação)
// - (subtração)
// / (divisão)
// * (multiplicação)
// ** (potencialização/elevação de um numero)
// % (O resto da divisão)

//precedencia 
// () **  *  /  %  +  -  /


//aqui temos o exemplo de uma adição
const number1= 2;
const number2= 22;
console.log(number1+number2);


//aqui temos exemplo de uma concatenação esse '2' é uma string, dado diferente do 22 que é um numero 
//sendo assim o resultado juntando todos os números =222

const numero1= '2';
const numero2= 22;
console.log(numero1+numero2);

//aqui temos o exemplo de uma subtração
const nummer1= 22;
const nummer2= 20;
console.log(nummer1-nummer2);


//aqui temos o exemplo de uma multiplicação
const nummer1= 22;
const nummer2= 20;
console.log(nummer1*nummer2);

//aqui temos o exemplo de uma divisão
const nummer1= 22;
const nummer2= 20;
console.log(nummer1/nummer2);


//Operador de incremento. O ++ pode ser tanto antes como dps da variável
let contador=1;
contador++;//2
contador++; //3
contador++; //4
contador++; //5
contador++; //6
console.log(contador);

//Operador de decremento. O -- pode ser tanto antes como dps da variável
let contador=1;
contador--;//2
contador--; //3
contador--; //4
contador--; //5
contador--; //6
console.log(contador);


//operadores de atribuição

let contador=2;
contador *=2;
contador *=2;
console.log(contador);


//NaN=NOT A NUMBER

const number1= 10;
const number2= '2';
console.log(number1*number2);

//resultado NaN pq uma string * um número é incompatível, poré se nessa string for um número o js 
//multiplica mesmo assim, porém se for somando numero e stringnumero ele junta td esse numero ao invez
//de somar, ele faz uma concatenação
//tem um jeito de fazer a soma mesmo sendo um numerostring+numero, envolvendo a string no parseInt
//ex
const number1= 10;
const number2= parseInt('2');
console.log(number1*number2);
//o ParseInt muda a stringnumero p numero inteiro/parseFloat p numero c casa decimais
//posso usar  number tbm que é mais facil e faz a msm coisa
const number1= 10;
const number2= parseInt('2');
console.log(number1*number2);
console.log(typeof number2);

//




