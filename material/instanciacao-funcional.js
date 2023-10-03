function animal(type, name, age) {
  let animal = {}

  animal.type = type;
  animal.name = name;
  animal.age = age;

  animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

  return animal;
}

const animal1 = animal('cachorro', 'Aslam', 5);
console.log(animal1)
animal1.eat()



const animal2 = animal('gato', 'Pipoca', 2);
console.log(animal2)
animal2.eat()