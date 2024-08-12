// ReturnType is used to get the type of data return by function and create a new type

function checkLength(a: string, b: number) {
  return a.length < b;
}

type ReturnTypeOfCheckLength = ReturnType<typeof checkLength>;

// Parameters built in type is helpful to get type of parameters passed to function
type Params = Parameters<typeof checkLength>;
