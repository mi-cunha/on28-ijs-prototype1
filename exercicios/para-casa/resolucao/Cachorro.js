const { HistoricoMedico } = require("./HistoricoMedico");
const { consultar, vacinar, realizarProcedimento } = require("./funcoes");

function latir() {
  console.log("Au au!");
}

function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome
  this.idade = idade
  this.cor = cor
  this.castrado = castrado
  this.raca = raca
  this.historico = new HistoricoMedico()
}

Cachorro.prototype.latir = latir
Cachorro.prototype.consultar = consultar
Cachorro.prototype.vacinar = vacinar
Cachorro.prototype.realizarProcedimento = realizarProcedimento

module.exports = { Cachorro }