//let num1=9.5478;
//let num2=Math.floor(num1);//esse aredonda o valor pra baixo de 9.5478 p 9
//let num2=Math.ceil(num1); // esse aredonda o vaalor pra cimma de 9.5478 pra 10
//let num2=Math.round(num1); //aredonda pra 9 se as casas decimai flutuantes tiverem menos da metade e se estiver maiorpra 10
//console.log(num2);

const numero= Number(prompt('digite um número'));

const numeroTitulo=document.getElementById('numero-titulo');
const texto=document.getElementById('texto');

numeroTitulo.innerHTML=numero;
texto.innerHTML='';
texto.innerHTML+=`<p>Raiz quadrada: ${numero**0.5}</p>`;
texto.innerHTML+=`<p> ${numero}é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML+=`<p> é NaN ${Number.isNaN(numero)}</p>`;
texto.innerHTML+=`<p> arredondando pra baixo:${math.floor(numero)}</p>`;
texto.innerHTML+=`<p> arredondando pra cima:${math.ceil(numero)}</p>`;
texto.innerHTML+=`<p> com duas casas decimais:${numero.toFixed(2)}</p>`;

