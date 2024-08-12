// Using partial we can create all properties of object as optional while creting new type
type Todo = {
  id: string;
  name: string;
  status: string;
  completed: boolean;
};

//Partial - all properties are now optional
type FormTodo = Partial<Todo>;

// Required - all properties are now required but not tested
type NewFormTodo = Required<Todo>;
