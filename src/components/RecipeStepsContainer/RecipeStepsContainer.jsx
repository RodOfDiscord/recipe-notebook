import { useState } from "react";
import PropTypes from "prop-types";
import TextArea from "../../ui/TextArea/TextArea";
import Button from "../../ui/Button/Button";
import style from "./style.module.css";
import TextInput from "../../ui/TextInput/TextInput";

function RecipeStepsContainer({ steps, addStep, removeStep }) {
  const [step, setStep] = useState("");

  const handleAddStep = () => {
    if (step === "") return;
    addStep(step);
    setStep("");
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
    <div className={style["steps-container"]}>
      <div className={style["add-block"]}>
        <TextArea
          value={step}
          onChange={(e) => setStep(e.target.value)}
        ></TextArea>
        <Button onClick={handleAddStep}>+</Button>
      </div>
      <div className={style["inputs-container"]}>{stepInputs}</div>
    </div>
  );
}

RecipeStepsContainer.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  addStep: PropTypes.func.isRequired,
  removeStep: PropTypes.func.isRequired,
};

export default RecipeStepsContainer;
