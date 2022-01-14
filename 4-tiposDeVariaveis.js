//o programa calcula a area de um quadrado ou triangulo
const forma='quadrado';
const basePolimero=5;
const alturaPolimero=7;
let area; //Usamos o let aqui pq essa variavel pode variar. desculpe a redundancia.

if(forma==='quadrado'){
    area=basePolimero*alturaPolimero;
}
else{
    area=(basePolimero*alturaPolimero)/2;
}
console.log(area);