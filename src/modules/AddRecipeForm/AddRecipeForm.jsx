import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../ui/TextInput/TextInput.jsx";
import TextArea from "../../ui/TextArea/TextArea";
import Button from "../../ui/Button/Button.jsx";
import Typography from "../../ui/Typography/Typography.jsx";
import style from "./style.module.css";
import useRecipes from "../../hooks/useRecipes.js";
import useRecipeSteps from "../../hooks/useRecipeSteps.js";
import RecipeStepsContainer from "../../components/RecipeStepsContainer/RecipeStepsContainer.jsx";

function AddRecipeForm() {
  const { steps, addStep, removeStep } = useRecipeSteps([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { recipes, addRecipe } = useRecipes();

  const save = () => {
    if (!title || !description || steps.length === 0) return;

    const newRecipe = {
      id: recipes.length + 1,
      title: title,
      description: description,
      steps: steps.map((step) => ({ content: step })),
    };

    addRecipe(newRecipe);
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

export default AddRecipeForm;
