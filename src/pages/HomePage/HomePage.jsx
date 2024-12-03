import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import RecipeList from "../../modules/RecipeList/RecipeList";
import Button from "../../ui/Button/Button";
import Typography from "../../ui/Typography/Typography";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.container}>
        <Typography variant="h1">Recipe NoteBook📝🍲</Typography>
        <Button onClick={() => navigate("/add")}>Add Recipe</Button>
      </div>

      <RecipeList></RecipeList>
    </>
  );
}

export default HomePage;
