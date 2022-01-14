//parametros da função
function soma(numero1, numero2){
    return  numero1+numero2;
}
console.log(soma(2,2));
console.log(soma(16,16));
console.log(soma(500,400)); //a ordem importa nos parametros

//concatenando strings e numeros com funçoes
function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`

}
console.log(nomeIdade("Bruno", 27));

//função dentro de outra função. multiplicação e soma.

function multiplica(numero1, numero2){
    return numero1*numero2;
}
console.log(multiplica(soma(4,6),soma(2,3)));//aqui ele soma e multiplica.

//outro exemplo curioso sobre funções

function cumprimentar(){
    return 'oi gente!'
}
function cumprimentarPessoa(nomePessoa){
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
cumprimentarPessoa("Bruno");

