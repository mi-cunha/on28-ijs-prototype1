function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
}

Animal.prototype.eat = function eat() {
  console.log(`O ${this.type} chamado ${this.name} está comendo.`)
}

const animal1 = new Animal('chachorro', 'Aslam', 5);
console.log(animal1)
animal1.eat()