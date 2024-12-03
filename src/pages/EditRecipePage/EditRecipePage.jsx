import EditRecipeForm from "../../modules/EditRecipeForm/EditRecipeForm";
import Typography from "../../ui/Typography/Typography";
import { useParams } from "react-router-dom";

function HomePage() {
  const { id } = useParams();
  return (
    <>
      <Typography variant="h1">Editing</Typography>
      <EditRecipeForm id={id}></EditRecipeForm>
    </>
  );
}

export default HomePage;
