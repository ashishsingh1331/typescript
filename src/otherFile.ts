import type { User } from "./main";
import { addDays } from "date-fns";
function printUser(user: User) {
  console.log(user.name);
}

addDays(3);

// printUser(me);
