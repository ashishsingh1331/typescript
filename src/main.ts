// Never type is useful to know did we checked all the possible options

type Todo = {
  title: string;
  priority: "High" | "Normal" | "Low";
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  if (typeof todo.dueDate == "string") {
    todo.dueDate.length; // Here error disappeared as we added above check
  }
  switch (todo.priority) {
    case "High":
      console.log(todo.priority);
      break;
    case "Normal":
      console.log(todo.priority);
      break;
    case "Low":
      console.log(todo.priority);
      break;
    default:
      const exhaustiveCheck: never = todo.priority;
      return exhaustiveCheck;
  }
}
