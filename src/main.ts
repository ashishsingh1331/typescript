// Omit and pick built in types are helpful when we want to create a new type based on available type
// And we just want to pick only view or omit few properties

type Todo = {
  id: string;
  name: string;
  status: string;
  completed: boolean;
};

// So we ommited id here
type NewTodo = Omit<Todo, "id">;
