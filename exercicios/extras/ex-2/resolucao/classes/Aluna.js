function Aluna(nome, matricula) {
  this.nome = nome;
  this.matricula = matricula;
  this.notas = [];

  this.adicionarNota = (nota) => {
    this.notas.push(nota);
  }

  this.calcularMedia = function() {
    if(this.notas.length === 0) {
      return 0;
    }

    const total = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = (total / this.notas.length).toFixed(2);
    return media;
  }

  this.exibirInformacoes = function() {
    console.log(`Nome: ${this.nome} - Matrícula: ${this.matricula} - Média: ${this.calcularMedia()}`);
  }
}

module.exports = { Aluna }
