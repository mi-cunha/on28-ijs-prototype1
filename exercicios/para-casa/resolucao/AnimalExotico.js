const { HistoricoMedico } = require('./HistoricoMedico');
const { consultar, vacinar, realizarProcedimento } = require('./funcoes');

function ehAdulto() {
	switch (this.especie) {
		case 'hamster':
			return this.idade > 2;
		case 'papagaio':
			return this.idade > 36;
		case 'calopsita':
			return this.idade > 18;
		default:
			return 'Animal não reconhecido';
	}
}

function AnimalExotico(nome, idade, cor, especie) {
	this.nome = nome;
	this.idade = idade;
	this.cor = cor;
	this.especie = especie;
	this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = ehAdulto;
AnimalExotico.prototype.consultar = consultar;
AnimalExotico.prototype.vacinar = vacinar;
AnimalExotico.prototype.realizarProcedimento = realizarProcedimento;

module.exports = { AnimalExotico };
