import { useAtom } from "jotai";
import { RecipesAtom } from "../atoms/recipesAtom";

const useRecipes = () => {
  const [recipes, setRecipes] = useAtom(RecipesAtom);

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  const updateRecipe = (id, updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === parseInt(id) ? updatedRecipe : recipe
      )
    );
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
  };
};

export default useRecipes;
