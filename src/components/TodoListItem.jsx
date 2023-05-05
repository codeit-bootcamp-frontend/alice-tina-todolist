import deleteIcon from "/src/assets/delete.svg";
import Circle from "/src/components/Circle.jsx";
import "/src/components/TodoListItem.css";

function TodoListItem({
  id,
  isChecked = true,
  listItem,
  onInputChange,
  onDelete,
}) {
  const handleInputChange = (e) => {
    const nextValue = e.target.value;
    onInputChange(id, nextValue);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list-item">
      <input
        className="list-item-input"
        onChange={handleInputChange}
        value={listItem}
      />
      <div className="check-delete-area">
        <Circle className="check" isChecked={isChecked} />
        <img className="delete" src={deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
}

export default TodoListItem;
