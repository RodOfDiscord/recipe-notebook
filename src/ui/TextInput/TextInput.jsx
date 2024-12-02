import style from "./style.module.css";

function TextInput({ ...props }) {
  return <input {...props} className={style["text-input"]} type="text" />;
}

export default TextInput;
