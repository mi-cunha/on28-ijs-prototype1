let animal = {}
animal.type = 'cachorro'
animal.name = 'Aslam'
animal['can I have'] = true
animal.eat = function eat() {
	console.log(`O animal chamado ${this.name} está comendo`);
}

console.log(animal.name) // Aslam
console.log(animal.age) // undefined
animal.eat() // O animal chamado Aslam está comendo