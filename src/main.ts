// Benefit of getting autocomplete and error protection
let a;
// Downside of using any, we loose all features provided by typescript

const b = JSON.parse("fasd"); // fetch also return type of any as response can be of any type
