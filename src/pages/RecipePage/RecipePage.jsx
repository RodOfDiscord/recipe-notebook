import Typography from "../../ui/Typography/Typography";
import style from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesAtom } from "../../atoms/recipesAtom";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
function RecipePage() {
  const recipes = useAtomValue(RecipesAtom);
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  useEffect(() => {
    if (!recipe) navigate("/");
  }, [recipe, navigate]);
  if (!recipe) {
    return null;
  }
  return (
    <>
      <Typography variant="h1">{recipe.title}</Typography>
      <Typography variant="p">{recipe.description}</Typography>
      <Typography variant="h2">Steps:</Typography>
      <ol className={style["steps-list"]}>
        {recipe.steps.map((step, index) => (
          <li key={index}>
            <Typography>{step.content}</Typography>
          </li>
        ))}
      </ol>
    </>
  );
}

export default RecipePage;
