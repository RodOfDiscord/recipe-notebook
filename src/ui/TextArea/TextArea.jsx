import { useId } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function TextArea({ label, ...props }) {
  const id = useId();
  return (
    <div>
      <label className={style["text-label"]} htmlFor={id}>
        {label}
      </label>
      <textarea id={id} className={style.base} {...props}></textarea>
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
};
export default TextArea;
