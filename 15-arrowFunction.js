//modalidade de aplicar função nova no JS.
function apresentaNome(nome){
    return `Meu nome é : ${nome}`;
}
console.log(apresentaNome("Bruno")); //isso é a menira classica de apresentar uma função simples.

//Agora, vamos aplicar o conceito de arrow function.

const apresentarArrow = nome => `Meu nome é: ${nome}`;//função do tipo arrowFunction não precisa de return.
console.log(apresentarArrow("Bruno")); //é como se a seta fosse o return, ta ligado?
// é interessante usar essa modalidade de função para pequenas intruçoes.

//exemplo com mais de uma linha de instrução:

const somaNumerosPequenos = (numero1, numero2) => { //A função vai retornar o valor da condicional.
    if(numero1 || numero2 > 10){
        return "Somente numeros de 1 a 9"
    }else{
        return (numero1+numero2);
    }
}