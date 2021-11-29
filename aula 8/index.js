

/*
Luiz Otávio Miranda tem 25 anos, pesa 84kg tem 1.8 de altura e seu 
IMC é de 25.925925925925924
*/

const nome='Luiz Otávio';
const sobrenome='Miranda';
const idade=25
const peso=80
const alturaEmMetro=1.80;
let imc; //indice de massa corporal
let anoDeNascimento;

imc= peso / (alturaEmMetro * alturaEmMetro);
anoDeNascimento=2021-idade;


//imc= peso / (alturaEmMetro * alturaEmMetro);
//console.log(imc);

//console.log(nome, sobrenome,  'tem', idade, 'anos', 'pesa', peso, 'kg');
//

//console.log('tem', alturaEmMetro, 'de altura e seu IMC é de', imc, '.')



//console.log(nome, sobrenome,  'tem', idade, 'anos', 'pesa', peso, 'kg');
//console.log(`tem ${alturaEmMetro} de altura e seu IMC é de ${IMC}`);

//template strings
console.log(` ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetro} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);







