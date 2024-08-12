import { times } from "lodash";

export type User = {
  id: string;
  name: string;
};

export const me: User = {
  id: "1",
  name: "Ashish",
};

times();
