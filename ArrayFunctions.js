const teste = [1, 2, 5, 7, 3, 7, 8];
console.log(teste); // [1, 2, 5, 7, 3, 7, 8]

const resultado = teste.filter((numero) => numero <= 5); // Cria uma nova array filtrada
console.log(resultado); // [ 1, 2, 5, 3 ]

const outroResultado = teste.map((numero) => numero*2); // Cria uma nova array com os itens modificados
console.log(outroResultado); // [ 2,  4, 10, 14, 6, 14, 16]

teste.forEach((numero) => { // Não cria nova array, apenas itera sobre cada item da array passada
  console.log(`Numero: ${numero}`)
});
// Numero: 1
// Numero: 2
// Numero: 5
// Numero: 7
// Numero: 3
// Numero: 7
// Numero: 8
