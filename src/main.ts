// Reaonly is used to create new type based on already existing type, but we need all the properties as readonly

type Todo = {
  title: string;
  completed: boolean;
};

type ReadOnlyTodo = Readonly<Todo>;
