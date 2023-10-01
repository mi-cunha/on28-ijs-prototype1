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
	this.adulto = this.ehAdulto();
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

AnimalExotico.prototype.ehAdulto = function () {
	if (
		(this.especie === "hamster" && this.idade > 2) ||
		(especie === "papagaio" && idade > 36) ||
		(especie === "hamster" && idade > 18)
	) {
		return true;
	} else {
		return false;
	}
};

Gato.prototype.miar = function miar() {
	console.log(`${this.nome} está miando.`);
};

Cachorro.prototype.latir = function latir() {
	console.log(`${this.nome} está latindo.`);
};

cachorro1 = new Cachorro("Aslam", 42, "preto", false, "srd");
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

hamster1 = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster");
console.log(hamster1);

gato1 = new Gato("Pipoca", 18, "branco", true);
console.log(gato1);

cachorro1.latir();
gato1.miar();