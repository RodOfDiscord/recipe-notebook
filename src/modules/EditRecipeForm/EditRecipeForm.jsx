import { useAtom } from "jotai";
import { RecipesAtom } from "../../atoms/recipesAtom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TextInput from "../../ui/TextInput/TextInput.jsx";
import TextArea from "../../ui/TextArea/TextArea";
import Button from "../../ui/Button/Button.jsx";
import Typography from "../../ui/Typography/Typography.jsx";
import style from "./style.module.css";

function EditRecipeForm({ id }) {
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipes, setRecipes] = useAtom(RecipesAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/");
    const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setDescription(recipeToEdit.description);
      setSteps(recipeToEdit.steps.map((step) => step.content));
    } else {
      navigate("/");
    }
  }, [id, recipes, navigate]);

  const addStep = () => {
    if (step === "") return;
    setSteps([...steps, step]);
    setStep("");
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const save = () => {
    if (!title || !description || steps.length === 0) return;

    const updatedRecipe = {
      id: parseInt(id),
      title: title,
      description: description,
      steps: steps.map((step) => ({ content: step })),
    };

    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === parseInt(id) ? updatedRecipe : recipe
      )
    );

    navigate("/");
  };

  const stepInputs = steps.map((step, index) => {
    return (
      <div className={style["step-item"]} key={index}>
        <TextInput value={index + 1 + ". " + step} disabled></TextInput>{" "}
        <Button onClick={() => removeStep(index)}>x</Button>
      </div>
    );
  });

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
        <div className={style["steps-container"]}>
          <div className={style["add-block"]}>
            <TextArea
              value={step}
              onChange={(e) => setStep(e.target.value)}
            ></TextArea>
            <Button onClick={addStep}>+</Button>
          </div>
          <div className={style["inputs-container"]}>{stepInputs}</div>
        </div>
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
