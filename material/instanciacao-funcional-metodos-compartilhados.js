const animalMethods = {
  eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo.`);
	},

  sleep: function sleep() {
    console.log(`O ${this.type} chamado ${this.name} está dormindo.`)
  },
}

function animal(type, name, age) {
  let animal = {}

  animal.type = type;
  animal.name = name;
  animal.age = age;

  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;

  return animal;
}

const animal1 = animal('cachorro', 'Aslam', 5);
console.log(animal1)
animal1.eat()
animal1.sleep()

animalMethods.sleep = function() {
  console.log('O sleep foi sobrescrito')
}

const animal2 = animal('gato', 'Pipoca', 2);
console.log(animal2)
animal2.eat()
animal2.sleep()