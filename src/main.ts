type Person = {
  name: string;
  skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master";
};

const person: Person = { name: "Ashish", skillLevel: "Intermediate" };
printSkillLevel(person.skillLevel);

function printSkillLevel(skillLevel: Person["skillLevel"]) {
  console.log(skillLevel);
}

type PeopleGroupedBySkillLevel = {
  [index in Person["skillLevel"]]: Person[];
};

const a: PeopleGroupedBySkillLevel = {
  Beginner: [{ name: "Ashish", skillLevel: "Intermediate" }],
};

// How can we type, object of groupby
// {"Beginner": [person1,person]}
// Main point is
