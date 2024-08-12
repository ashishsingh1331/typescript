// Typeguard is typescript feature by which typescrit do smart work.
// It check our code flow, and if we have union type for our object property,
// TS decide the type of property in different part of code

type Todo = {
  title: string;
  priority: "High" | "Normal" | "Low";
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  if (typeof todo.dueDate == "string") {
    todo.dueDate.length; // Here error disappeared as we added above check
  }
}
