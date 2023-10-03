function consultar(data) {
	this.historico.consultas.unshift(data);
}

function vacinar(vacina) {
	this.historico.vacinas.push(vacina);
}

function realizarProcedimento(procedimento) {
	this.historico.procedimentos.push(procedimento);
}

module.exports = { consultar, vacinar, realizarProcedimento };
