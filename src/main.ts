const nums = ["1", "2", "3"] as const;
// as const is useful for construtiung enums
// Enums are helpful when we want to create a variable which can take specific values

const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const; // Here we created ENUM

type Person = {
  skillLevels: (typeof SKILL_LEVELS)[number];
};
SKILL_LEVELS.forEach((skillLevel) => {
  console.log(skillLevel);
});

// as const is helpful to create every property of object as readonly
const person = {
  name: "Kyle",
  age: 28,
  address: {
    street: "Main st",
  },
} as const;
