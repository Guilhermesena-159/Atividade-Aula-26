type materiais = {
    nome:  String;
    preco: Number;
    peso: Number
    estoque: Number
}

const listadeMateriais: materiais[] = [
    {nome: "cimento", preco: 6.99, peso: 10, estoque: 100}
    {nome: "areia", preco: 5.00, peso: 10, estoque: 50}
    {nome: "brita", preco: 3.99, peso: 10, estoque: 300}
    {nome: "cerâmica", preco: 30.00, peso: 15, estoque: 200}
    {nome: "barro", preco: 4.00, peso: 10, estoque: 150}
    {nome: "rejunte", preco: 3.00, peso: 5, estoque: 400}
]

const nomeMateriais = listadeMateriais.map(function(materiais) {
    return materiais.nome;

});

const filtrarMateriais = listadeMateriais.filter(function(materiais) {
    return materiais.estoque = 150    
});

.map(function(materiais) {
    return materiais.nome;
};)

const somarPrecoMateriais = listadeMateriais.reduce(function(acumulador, materiais) {
    return acumulador + materiais.preco;
}, 0).toFixed(2);

console.log(nomeMateriais);
console.log(filtrarMateriais)
console.log(somarPrecoMateriais)



