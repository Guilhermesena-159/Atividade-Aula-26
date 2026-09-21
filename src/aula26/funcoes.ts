//FUNÇÃO COM PARÂMETROS E RETORNO
function somar(a: number, b: number): number{
    return a + b;
}

const resultado = somar(10, 5);
console.log(resultado);

//FUNÇÃO COM PARÂMETRO SEM RETORNO
function mostrarNome(nome: String): void {
    console.log(`Olá, ${nome}!`);
}

mostrarNome("Guilherme");

//FUNÇÃO SEM PARÂMETRO COM RETORNO
function pegarIdade(): Number {
    return 25;
}

const Idade = pegarIdade();
console.log(Idade);

//FUNÇÃO SEM PARÂMETRO E SEM RETORNO
function mostrarMensagem(): void {
    console.log("Olá,Seja Bem vindo!");
}

mostrarMensagem();