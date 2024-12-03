import PropTypes from "prop-types";
import Button from "../../ui/Button/Button";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function RecipeItem({ id, title, description, onDelete, onEdit }) {
  return (
    <div className={style.item}>
      <Link to={`/${id}`}>
        <div className={style.content}>
          <strong>{title}</strong>
          <div>{description}</div>
        </div>
      </Link>
      <div style={{ display: "flex", gap: "1em" }}>
        <Button onClick={onDelete}>Delete</Button>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
};
export default RecipeItem;
