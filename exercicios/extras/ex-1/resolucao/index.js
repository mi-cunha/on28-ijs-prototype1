const { Pessoa, Evento } = require('./classes');

// Eventos
const showDoMilhao = new Evento('Show do Milhão', true, 100, 200);
const saoJoao = new Evento('São João', false, 50, 100);
const festaDeAniversario = new Evento('Festa de Aniversário', false, 10, 15);
const balada = new Evento('Balada', true, 40, 60);

// Pessoas
const pessoa1 = new Pessoa('Laura', 38, 1000);
const pessoa2 = new Pessoa('Maria', 17, 500);
const pessoa3 = new Pessoa('Joana', 18, 10);
const pessoa4 = new Pessoa('Ana', 25, 60);

// Comprar ingressos
pessoa1.comprarIngresso(showDoMilhao, 'normal');
pessoa2.comprarIngresso(showDoMilhao, 'normal');
pessoa3.comprarIngresso(showDoMilhao, 'normal');
pessoa4.comprarIngresso(showDoMilhao, 'normal');

pessoa1.comprarIngresso(saoJoao, 'vip');
pessoa2.comprarIngresso(saoJoao, 'vip');
pessoa3.comprarIngresso(saoJoao, 'vip');
pessoa4.comprarIngresso(saoJoao, 'vip');

pessoa1.comprarIngresso(festaDeAniversario, 'vip');
pessoa2.comprarIngresso(festaDeAniversario, 'vip');
pessoa3.comprarIngresso(festaDeAniversario, 'normal');
pessoa4.comprarIngresso(festaDeAniversario, 'vip');

pessoa1.comprarIngresso(balada, 'vip');
pessoa2.comprarIngresso(balada, 'normal');
pessoa3.comprarIngresso(balada, 'normal');
pessoa4.comprarIngresso(balada, 'normal');

// Mostrar ingressos
pessoa1.mostrarIngressos();
pessoa2.mostrarIngressos();
pessoa3.mostrarIngressos();
pessoa4.mostrarIngressos();

// Mostrar pessoas
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
