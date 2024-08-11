// Tuples is helpfule to create type of different types
const person = {
  name: "Ashish",
  age: "37",
};

console.log(Object.entries(person));

Object.entries(person).forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});

type Tuple = [string, boolean];
const a: Tuple = ["ashish", true, "Adfsa"];
