// Using awaited we can get the type of promise will return
type Async = Promise<string>;

type Value = Awaited<Async>;

async function doSomething() {
  return 3;
}

type New = Awaited<ReturnType<typeof doSomething>>;
