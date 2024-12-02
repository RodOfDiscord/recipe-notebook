import PropTypes from "prop-types";
import Button from "../../ui/Button/Button";
import style from "./style.module.css";

function RecipeItem({ number, title, description, onDelete, onEdit, onView }) {
  return (
    <div className={style.item}>
      <div className={style.content} onClick={onView}>
        <strong>
          {number}. {title}
        </strong>
        <div>{description}</div>
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <Button onClick={onDelete}>Delete</Button>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
};
export default RecipeItem;
