import deleteIcon from "/src/assets/delete.svg";
import purpleCheckedCircleIcon from "/src/assets/purple-checked-circle.svg";
import blueCheckedCircleIcon from "/src/assets/blue-checked-circle.svg";
import pinkCheckedCircleIcon from "/src/assets/pink-checked-circle.svg";
import emptyCircleIcon from "/src/assets/empty-circle.svg";
import errorIcon from "/src/assets/error-message-icon.svg";
import "/src/components/TodoListItem.css";
import { useEffect, useState } from "react";

function TodoListItem({ id, listItem, onInputChange, onCheckedChange, onDelete, color = "purple" }) {
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

  const getCheckedCircle = () => {
    if (color === "purple") {
      return <img className="circle-icon" src={purpleCheckedCircleIcon} onClick={handleCheckedChange} />;
    } else if (color === "blue") {
      return <img className="circle-icon" src={blueCheckedCircleIcon} onClick={handleCheckedChange} />;
    } else {
      return <img className="circle-icon" src={pinkCheckedCircleIcon} onClick={handleCheckedChange} />;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      e.target.blur();
    }
  };

  useEffect(() => {
    if (!listItem.value) setIsEmptyValue(true);
    else setIsEmptyValue(false);
  }, []);

  return (
    <div className="list-item">
      <div className="input-box">
        {isEmptyValue ? (
          <>
            <input className="list-item-input error" onChange={handleInputChange} value={listItem.value} />
            <div className="error-box">
              <img className="error-icon" src={errorIcon} />
              <p className="error-message">할 일을 입력해주세요.</p>
            </div>
          </>
        ) : listItem.checked ? (
          <input className="list-item-input text-blot" onChange={handleInputChange} value={listItem.value} onKeyDown={handleKeyDown} />
        ) : (
          <input className="list-item-input" onChange={handleInputChange} value={listItem.value} onKeyDown={handleKeyDown} />
        )}
      </div>
      <div className="check-delete-box">
        {listItem.checked ? getCheckedCircle() : <img className="check" src={emptyCircleIcon} onClick={handleCheckedChange} />}
        <img className="delete" src={deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
}

export default TodoListItem;
