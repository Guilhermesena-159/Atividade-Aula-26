type Pessoa = {nome:string; idade:number}; //molde/contrato/modelo

function criarPessoa(nome: string, idade: number): Pessoa {
    return{nome: nome, idade: idade};
}

const p = criarPessoa("Guilherme", 24);
console.log(p)

type produto = {nome: string, preço: number, estoque: number};

function criarProduto(nome: string, preço: number, estoque: number): produto {
    return{nome, preço, estoque}
}

const produto = criarProduto("Teclado com led", 150, 59);
console.log(produto);