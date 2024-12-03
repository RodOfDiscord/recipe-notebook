import Typography from "../../ui/Typography/Typography";
import style from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesAtom } from "../../atoms/recipesAtom";
import { useAtom } from "jotai";

function RecipePage() {
  const [recipes] = useAtom(RecipesAtom);
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  if (!recipe) navigate("/");
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
