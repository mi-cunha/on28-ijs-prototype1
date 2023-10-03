const parent = {
  name: 'Maria',
  age: 50,
  heritage: 'brasileira',
}

const child = Object.create(parent);
child.name = 'Luara';
child.age = 28;

console.log(child);