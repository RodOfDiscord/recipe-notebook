import RecipeList from "../../modules/RecipeList/RecipeList";
import Typography from "../../ui/Typography/Typography";

function HomePage() {
  return (
    <>
      <Typography variant="h1">Recipe NoteBook📝🍲</Typography>
      <RecipeList></RecipeList>
    </>
  );
}

export default HomePage;
