type Person = {
  name: string;
  age: number;
};

const age = getValue("age", { name: "Ashish", age: 23 });
console.log(age);
// This key we are passing but what should be the type as this need to be dynamic
// So there is a type call keyof
function getValue(key: keyof Person, person: Person) {
  return person[key];
}
