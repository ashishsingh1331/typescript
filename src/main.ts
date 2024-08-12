// Using AS we can cast a variable to a speicific type. Most of the time we know what will the BE api will return

type Todo = {
  title: string;
};
function func(data: unknown) {
  fetch("sdf")
    .then((res) => res.json())
    .then((data) => {
      return data as Todo;
    })
    .then((todo) => {});
}
