import deleteIcon from "/src/assets/delete.svg";
import Circle from "/src/components/Circle.jsx";
import "/src/components/TodoListItem.css";

// function TodoListItem({id, isChecked, listItem, onDelete, onCircleClick, onInputClick}) {

//   /*
//   isChecked -> <Circle isChecked />
//   onDelete
//   onCircleClick -> circle 누를 때
//   onInputClick -> input 누를 때
//   */

//   const handleInputClick = (e) => {
//     // 제어 컴포넌트 작업
//     const nextValue = e.target.value;
//     onInputClick(nextValue);
//   }

//   const handleDelete = () => {
//     // id를 넘겨주면 해당되는 아이템을 local storage에 삭제
//     onDelete(id);
//   }

//   return (
//     <>
//      <input onClick={handleInputClick} value={listItem}/>
//      <div>
//         <Circle isChecked={isChecked} onCircleClick={onCircleClick}/>
//         <img src={deleteIcon} onClick={handleDelete}/>
//      </div>
//     </>
//   );
// }

// export default TodoListItem;

function TodoListItem({ id, isChecked = true, listItem, onInputChange }) {
  const handleInputChange = (e) => {
    const nextValue = e.target.value;
    onInputChange(id, nextValue);
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
        <img className="delete" src={deleteIcon} />
      </div>
    </div>
  );
}

export default TodoListItem;
