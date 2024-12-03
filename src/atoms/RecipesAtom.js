import { atomWithStorage } from "jotai/utils";
export const RecipesAtom = atomWithStorage("recipes", [
  {
    id: 0,
    title: "Pizza",
    description: "bla bla bla",
    steps: [
      { content: "Prepare the dough" },
      { content: "Add toppings" },
      { content: "Bake in the oven" },
    ],
  },
]);
