// using unknown type is better than using any. Using any means we are forfetting the purpose or typescript
// using unknown we put additional checks before the variable usage so
function func(data: unknown) {
  if (
    data != null &&
    typeof data === "object" &&
    "name" in data &&
  )
    console.log(data.name);
}
