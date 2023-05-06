import deleteIcon from "/src/assets/delete.svg";
import checkCircleIcon from "/src/assets/check-circle.svg";
import emptyCircleIcon from "/src/assets/empty-circle.svg";
import "/src/components/TodoListItem.css";

function TodoListItem({ id, listItem, onInputChange, onCheckedChange, onDelete }) {
  const handleInputChange = (e) => {
    const nextValue = e.target.value;
    onInputChange(id, nextValue);
  };

  const handleCheckedChange = () => {
    onCheckedChange(id, !listItem.checked);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list-item">
      <input className="list-item-input" onChange={handleInputChange} value={listItem.title} />
      <div className="check-delete-area">
        {listItem.checked ? (
          <img className="circle-icon" src={checkCircleIcon} onClick={handleCheckedChange} />
        ) : (
          <img className="circle-icon" src={emptyCircleIcon} onClick={handleCheckedChange} />
        )}
        <img className="delete" src={deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
}

export default TodoListItem;
