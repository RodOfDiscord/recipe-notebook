import { atom } from "jotai";
export const RecipesAtom = atom([
  {
    id: 1,
    title: "Pizza",
    description: "bla bla bla",
    steps: [
      { content: "Prepare the dough" },
      { content: "Add toppings" },
      { content: "Bake in the oven" },
    ],
  },
]);
