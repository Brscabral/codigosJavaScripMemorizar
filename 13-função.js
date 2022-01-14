//as funçoes são declaradas e depois executadas.ex:
function imprimirTexto(texto){
    console.log(texto);
}
imprimirTexto("olá, Mundo!");


function soma(){
    const num1=1;
    const num2=2;
return num1 + num2;     //nesse caso, a função vai retornar o valor da operação. mas pode retornar valores boleanos e etc..
}

console.log(soma());//console log na função para ela aprecer no terminal.
//função dentro de uma função:

imprimirTexto(soma());