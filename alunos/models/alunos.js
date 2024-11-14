class Alunos {

    id;
    nome;
    idade;
    participou;
    cargo;

  constructor(id, nome, idade, participou, cargo ) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.participou = participou;
    this.cargo = cargo;
  }
}

export default Alunos;