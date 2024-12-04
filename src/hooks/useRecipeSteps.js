import { useState, useCallback } from "react";

function useRecipeSteps(initialSteps = []) {
  const [steps, setSteps] = useState(initialSteps);

  const addStep = (newStep) => {
    if (!newStep.trim()) return;
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const initializeSteps = useCallback((newSteps) => {
    setSteps(newSteps);
  }, []);

  return {
    steps,
    addStep,
    removeStep,
    initializeSteps,
  };
}

export default useRecipeSteps;
