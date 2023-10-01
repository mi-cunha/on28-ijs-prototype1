const { Gato, Cachorro, AnimalExotico} = require("./resolucao.js")

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