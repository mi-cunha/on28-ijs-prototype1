const { Gato } = require("./Gato");
const { Cachorro } = require("./Cachorro");
const { AnimalExotico } = require("./AnimalExotico");

const gato = new Gato("Garfield", 5, "laranja", false);
const cachorro = new Cachorro("Pluto", 10, "preto", true, "SRD");

const hamster = new AnimalExotico("Hamtaro", 1, "marrom", "hamster");
const papagaio = new AnimalExotico("Louro José", 40, "verde", "papagaio");
const calopsita = new AnimalExotico("Calopsita", 20, "cinza", "calopsita");
const pintinho = new AnimalExotico("Pintinho Amarelinho", 1, "amarelo", "pintinho");

// Gato
console.log(gato);
gato.miar();
gato.consultar('01/01/2023');
gato.vacinar('raiva');
gato.realizarProcedimento({tipo: 'castração', motivo: 'controle populacional'});
gato.consultar('01/02/2023');
gato.vacinar('v8');
console.log(gato.historico);

// Cachorro
console.log(cachorro);
cachorro.latir();
cachorro.consultar('27/10/2023');
cachorro.vacinar('raiva');
cachorro.realizarProcedimento({tipo: 'ultrassom', motivo: 'dores abdominais'});
cachorro.consultar('11/12/2023');
cachorro.vacinar('gripe');
console.log(cachorro.historico);

// Hamster
console.log(hamster);
console.log(hamster.ehAdulto());

// Papagaio
console.log(papagaio);
console.log(papagaio.ehAdulto());

// Calopsita
console.log(calopsita);
console.log(calopsita.ehAdulto());

// Pintinho
console.log(pintinho);
console.log(pintinho.ehAdulto());
