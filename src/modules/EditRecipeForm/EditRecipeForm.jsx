import useRecipes from "../../hooks/useRecipes.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeSteps from "../../hooks/useRecipeSteps.js";
import PropTypes from "prop-types";
import TextInput from "../../ui/TextInput/TextInput.jsx";
import TextArea from "../../ui/TextArea/TextArea";
import Button from "../../ui/Button/Button.jsx";
import Typography from "../../ui/Typography/Typography.jsx";
import RecipeStepsContainer from "../../components/RecipeStepsContainer/RecipeStepsContainer.jsx";
import style from "./style.module.css";

function EditRecipeForm({ id }) {
  const { steps, addStep, removeStep, initializeSteps } = useRecipeSteps([]);
  const { recipes, updateRecipe } = useRecipes();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/");
    const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setDescription(recipeToEdit.description);
      initializeSteps(recipeToEdit.steps.map((step) => step.content));
    } else {
      navigate("/");
    }
  }, [id, recipes, navigate, initializeSteps]);

  const save = () => {
    if (!title || !description || steps.length === 0) return;

    const updatedRecipe = {
      id: parseInt(id),
      title: title,
      description: description,
      steps: steps.map((step) => ({ content: step })),
    };

    updateRecipe(id, updatedRecipe);

    navigate("/");
  };

  return (
    <>
      <div className={style.container}>
        <TextInput
          label={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TextInput>
        <TextArea
          label={"Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></TextArea>
        <Typography>Steps</Typography>
        <RecipeStepsContainer
          steps={steps}
          addStep={addStep}
          removeStep={removeStep}
        ></RecipeStepsContainer>
        <Button
          disabled={!title || !description || steps.length === 0}
          onClick={save}
        >
          Save
        </Button>
        <Button onClick={() => navigate("/")}>Cancel</Button>
      </div>
    </>
  );
}

EditRecipeForm.propTypes = {
  id: PropTypes.string,
};
export default EditRecipeForm;
