let id: string | number | boolean = 7;
id = true;
console.log(id);

// ? symbol is way of union between undefined and boolean

type Todo = {
  status: "Complete" | "Incomplete";
  name: string;
};

let todo: Todo = { name: "My", status: "Complete" };

// Union does not work with interface
