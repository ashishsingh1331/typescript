// Query Selectore can return any type of element even as div
// It is actually developer responsibility to tell what kind of element developer is expecting
const input = document.querySelector<HTMLInputElement>(".input");

console.log(input?.value);

// Wriging own generics

function getSecond<arrayType>(array: arrayType[]): arrayType {
  return array[1];
}

const a = [1, 2, 3];
// We can pass the generic while calling as well. But TS is smart enough , guessing the generic type by checking the value
const ret = getSecond(a);
const b = ["a", "b", "c"];
const ret1 = getSecond(b);
console.log(ret1);

const c = new Set<string>();
const d = new Map<string, number>();

// Typing api response using generics
type APIresponse<Tdata extends object = { status: number }> = {
  data: Tdata;
  isError: boolean;
};

type User = { name: string; age: number };

const userResponse: APIresponse<User> = {
  data: {
    name: "Ashish",
    age: 37,
  },
  isError: true,
};

type Blog = { title: string; body: string };

const blogResponse: APIresponse<Blog> = {
  data: {
    title: "Ashish",
    body: "sdfasd",
  },
  isError: true,
};

const defaultResponse: APIresponse = {
  data: {
    status: 4,
  },
  isError: false,
};

type newApiResponse<TData> = {
  data: TData;
  isError: boolean;
};

const testResponse: newApiResponse<Array<number>> = {
  data: [1, 3, 5],
  isError: true,
};

function aToO<T>(array: [string, T][]) {
  const obj: {
    [index: string]: T;
  } = {};
  array.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arr: [string, number | boolean][] = [
  ["keyone", 1],
  ["keytwo", 2],
  ["keythree", true],
];

console.log(aToO(arr));
