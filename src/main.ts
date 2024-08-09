type Person = {
  name: string;
  age: number;
};

type PersonWithId = Person & { id: string };

const person: Person = { name: "ashish", age: 34 };

const personWithId: PersonWithId = { ...person, id: "Myid" };
// Interesction is useful when we want to add additional types in existing type
