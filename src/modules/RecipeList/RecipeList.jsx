import { useAtom } from "jotai";
import { RecipesAtom } from "../../atoms/recipesAtom";
import { useNavigate } from "react-router-dom";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import style from "./style.module.css";

function RecipeList() {
  const navigate = useNavigate();
  const [recipes] = useAtom(RecipesAtom);
  const items = recipes.map((recipe) => (
    <li key={recipe.id}>
      <RecipeItem
        title={recipe.title}
        description={recipe.description}
        id={recipe.id}
        onEdit={() => navigate(`/edit/${recipe.id}`)}
      ></RecipeItem>
    </li>
  ));
  return <ul className={style["recipe-list"]}>{items}</ul>;
}

export default RecipeList;
