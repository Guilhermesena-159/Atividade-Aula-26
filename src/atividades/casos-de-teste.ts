type CasoDeTeste = {
  id: number;
  nome: string;
  descricao: string;
  automatizado: boolean;
};

const caso1: CasoDeTeste = {
  id: 1,
  nome: "Login correto",
  descricao: "Testar login correto",
  automatizado: true
};

const caso2: CasoDeTeste = {
  id: 2,
  nome: "Senha errada",
  descricao: "Testar senha errada",
  automatizado: true
};

const caso3: CasoDeTeste = {
  id: 3,
  nome: "Recuperar senha",
  descricao: "Testar recuperação de senha",
  automatizado: false
};

function criarCaso(
  id: number,
  nome: string,
  descricao: string,
  automatizado: boolean
): CasoDeTeste {
  return {
    id: id,
    nome: nome,
    descricao: descricao,
    automatizado: automatizado
  };
}

function descrever(caso: CasoDeTeste): string {
  return caso.nome + " - " + caso.descricao;
}

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
  caso.automatizado = true;
  return caso;
}

const caso4 = criarCaso(
  4,
  "Logout",
  "Testar logout",
  true
);

console.log(descrever(caso1));
console.log(descrever(caso2));
console.log(descrever(caso3));
console.log(descrever(caso4));

console.log(typeof criarCaso);
console.log(typeof descrever);
console.log(typeof marcarAutomatizado);

