import { useId } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function TextInput({ label, ...props }) {
  const id = useId();
  return (
    <div>
      <label className={style["text-label"]} htmlFor={id}>
        {label}
      </label>
      <input id={id} {...props} className={style["text-input"]} type="text" />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
};
export default TextInput;
