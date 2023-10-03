const animalMethods = {
  eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo.`);
	},

  sleep: function sleep() {
    console.log(`O ${this.type} chamado ${this.name} está dormindo.`)
  },
}

function Animal(type, name, age) {
  let animal = Object.create(animalMethods);

  animal.type = type;
  animal.name = name;
  animal.age = age;

  return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 5);
animal1.eat();