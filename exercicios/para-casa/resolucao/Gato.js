const { HistoricoMedico } = require("./HistoricoMedico");
const { consultar, vacinar, realizarProcedimento } = require("./funcoes");

function miar() {
	console.log("Miau!");
}

function Gato(nome, idade, cor, castrado) {
	this.nome = nome;
	this.idade = idade;
	this.cor = cor;
	this.castrado = castrado;
	this.historico = new HistoricoMedico();
}

Gato.prototype.miar = miar;
Gato.prototype.consultar = consultar;
Gato.prototype.vacinar = vacinar;
Gato.prototype.realizarProcedimento = realizarProcedimento;

module.exports = { Gato };
