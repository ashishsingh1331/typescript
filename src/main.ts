type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends?: string[];
  address: {
    street: string;
  };
};

const person: Person = {
  name: "Ashish",
  age: 34,
  address: {
    street: "Janakpuri",
  },
};

const person2: Person = {
  name: "Arti",
  age: 34,
  address: {
    street: "Janakpuri",
  },
};

// Interface can only be used with objects

interface Animal {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends?: string[];
  address: {
    street: string;
  };
}
