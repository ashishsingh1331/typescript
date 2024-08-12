// On giving type to a object , we strictly says the variable should meet all the signature
// But Suppose if we say we have a object , we just want to meet the minimun requirements
// Then we can use satisfies feature of TS.

type Todo = {
  title: string;
  dueDate: string | Date;
  isComplete: boolean;
};

// const todo: Todo = {
//   title: "todo",
//   dueDate: new Date(),
//   isComplete: false,
// };

const todo = {
  title: "todo",
  dueDate: new Date(),
  isComplete: false,
} satisfies Todo;
todo.dueDate.setDate(4);
