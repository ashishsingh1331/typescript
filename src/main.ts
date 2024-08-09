function sum(a: number, b: number) {
  return a + b;
}

const c = sum(1, 2);

console.log(c);

function printPerson(person: { name: string }) {
  console.log(person.name);
}

const person = { name: "Ashish", age: 20 };

printPerson(person);
