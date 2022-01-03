
const gatos=['Cecílio','Azaléia','Ernesto'];

gatos.unshift('Sinho');//Adiciona o nome  no começo
gatos.unshift('Lilao')//Como eu coloquei o lilão dps do Sinho, agora ela vai em primeiro e dps o sinho p segundo



//console.log(gatos[0]);

//add nomes na array
gatos.push('Tânia');//adc o nome no final tbm
gatos.push('Neide');
gatos.push('Firmino');
gatos.push('Sophia');
gatos[gatos.length ]='Lulu' ;//Adc o nome no final

const removido =gatos.pop();//remover um ultimo item da lista
//const removido =gatos.shift();//remover no começo
console.log(removido);

console.log(gatos);

//Explicação:
//O método shift()remove o primeiro elemento de um array e retorna esse elemento.

//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.