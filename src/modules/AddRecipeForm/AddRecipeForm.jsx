import { useAtom } from "jotai";
import { RecipesAtom } from "../../atoms/recipesAtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../ui/TextInput/TextInput.jsx";
import TextArea from "../../ui/TextArea/TextArea";
import Button from "../../ui/Button/Button.jsx";
import Typography from "../../ui/Typography/Typography.jsx";
import style from "./style.module.css";

function AddRecipeForm() {
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipes, setRecipes] = useAtom(RecipesAtom);
  const navigate = useNavigate();
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

    const newRecipe = {
      id: recipes.length + 1,
      title: title,
      description: description,
      steps: steps,
    };

    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
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
      </div>
    </>
  );
}

export default AddRecipeForm;