function Animal(type, name, age) {
  let animal = Object.create(Animal.prototype);

  animal.type = type;
  animal.name = name;
  animal.age = age;

  return animal;
}

Animal.prototype.eat = function eat() {
  console.log(`O ${this.type} chamado ${this.name} está comendo.`);
}

Animal.prototype.sleep = function sleep() {
  console.log('O animal está dormindo');
}

const animal1 = Animal('cachorro', 'Aslam', 5);
console.log(animal1);
animal1.eat();
