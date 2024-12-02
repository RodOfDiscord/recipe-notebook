import PropTypes from "prop-types";
import style from "./style.module.css";
function Typography({ variant = "p", children, ...props }) {
  const Tag = variant;
  return (
    <Tag {...props} className={style.base}>
      {children}
    </Tag>
  );
}
Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
  children: PropTypes.node.isRequired,
};
export default Typography;
