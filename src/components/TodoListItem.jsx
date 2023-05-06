import deleteIcon from "/src/assets/delete.svg";
import checkCircleIcon from "/src/assets/check-circle.svg";
import emptyCircleIcon from "/src/assets/empty-circle.svg";
import errorIcon from "/src/assets/error-message-icon.svg";
import "/src/components/TodoListItem.css";
import { useEffect, useState } from "react";

function TodoListItem({ id, listItem, onInputChange, onCheckedChange, onDelete }) {
  const [isEmptyValue, setIsEmptyValue] = useState(false);

  const handleInputChange = (e) => {
    const nextValue = e.target.value;
    onInputChange(id, nextValue);

    if (!e.target.value) setIsEmptyValue(true);
    else setIsEmptyValue(false);
  };

  const handleCheckedChange = () => {
    onCheckedChange(id, !listItem.checked);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  useEffect(() => {
    if (!listItem.title) setIsEmptyValue(true);
    else setIsEmptyValue(false);
  }, []);

  return (
    <div className="list-item">
      <div className="input-box">
        {isEmptyValue ? (
          <>
            <input className="list-item-input error" onChange={handleInputChange} value={listItem.title} />
            <div className="error-box">
              <img className="error-icon" src={errorIcon} />
              <p className="error-message">할 일을 입력해주세요.</p>
            </div>
          </>
        ) : listItem.checked ? (
          <input className="list-item-input line-thorugh text-blot" onChange={handleInputChange} value={listItem.title} />
        ) : (
          <input className="list-item-input line-thorugh" onChange={handleInputChange} value={listItem.title} />
        )}
      </div>
      <div className="check-delete-box">
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
