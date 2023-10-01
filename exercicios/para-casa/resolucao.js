function Gato(nome, idade, cor, castrado) {
	this.nome = nome;
	this.idade = idade;
	this.cor = cor;
	this.castrado = castrado;
	this.historico = new HistoricoMedico();
}

function Cachorro(nome, idade, cor, castrado, raca) {
	this.nome = nome;
	this.idade = idade;
	this.cor = cor;
	this.castrado = castrado;
	this.raca = raca;
	this.historico = new HistoricoMedico();
}

function AnimalExotico(nome, idade, cor, especie) {
	this.nome = nome;
	this.idade = idade;
	this.cor = cor;
	this.especie = especie;
	if ((especie = hamster && idade > 2)) {
		this.adulto = true;
	} else {
		this.adulto = false;
	}
	if ((especie = papagaio && idade > 36)) {
		this.adulto = true;
	} else {
		this.adulto = false;
	}
	if ((especie = hamster && idade > 18)) {
		this.adulto = true;
	} else {
		this.adulto = false;
	}
	this.historico = new HistoricoMedico();
}

function HistoricoMedico() {
	this.consultas = [];
	this.vacinas = [];
	this.procedimentos = [];
}
HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
	this.vacinas.push(vacina);
	console.log(`A vacina ${vacina} entrou no sistema`);
};

HistoricoMedico.prototype.consultar = function consultar(data) {
	this.consultas.unshift(data); //adiciona elementos no início do array
	console.log(`A data ${data} entrou no sistema`);
};

HistoricoMedico.prototype.realizarProcedimento = function realizarProcedimento(
	tipoProcedimento,
	motivo
) {
	const procedimento = { tipo: tipoProcedimento, motivo: motivo };
	this.procedimentos.push(procedimento);
	console.log(
		`O procedimento ${tipoProcedimento} entrou no sistema por motivo de ${motivo}`
	);
};

cachorro1 = new Cachorro("Doguinho", 24, "preto", true, "poodle");
cachorro1.historico.consultar("09/08/2023");
console.log(cachorro1);
cachorro1.historico.consultar("11/09/2023");
console.log(cachorro1);
cachorro1.historico.vacinar("raiva");
console.log(cachorro1);
cachorro1.historico.vacinar("v10");
console.log(cachorro1);
cachorro1.historico.realizarProcedimento("ultrassom", "dores");
console.log(cachorro1.historico);
