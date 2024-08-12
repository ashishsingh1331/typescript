// Record is better way to create the signature of type based on index of another type

type Person = {
  name: string;
  age: number;
};

// type PeopleGroupedByName = {
//   [index: string]: Person[];
// };

type PeopleGroupedByName = Record<Person["name"], Person[]>;
