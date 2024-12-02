import PropTypes from "prop-types";
import style from "./style.module.css";
function Button({ children, iconSource, ...props }) {
  return (
    <button className={style.primary} {...props}>
      <div>
        {iconSource && <img src={iconSource} />}
        <span>{children}</span>
      </div>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  iconSource: PropTypes.string,
};
export default Button;
