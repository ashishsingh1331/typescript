type Person = {
  name: string;
  age: number;
};

type PersonWithId = Person & { readonly id: string };

const person: Person = { name: "ashish", age: 34 };

const personWithId: PersonWithId = { ...person, id: "Myid" };
// Interesction is useful when we want to add additional types in existing type
personWithId.id = "ere";

type NumberArray = readonly number[];
const numbs: NumberArray = [1, 2, 3];
numbs.push;
