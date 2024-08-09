type Options = { debugMod: boolean; indentLevel?: number };

function printNameAndAge(
  name: string,
  { debugMod = false, indentLevel = 1 }: Options
) {
  console.log(name, debugMod, indentLevel);
}

printNameAndAge("sdf", { debugMod: true, indentLevel: 34 });

// Rest operatoiin

function sum(...nums: number[]) {
  return; // code to add them
}

sum(1, 2, 4);
sum(1, 4);
