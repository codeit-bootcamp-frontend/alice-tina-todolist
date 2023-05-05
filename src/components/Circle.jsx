import checkCircleIcon from "/src/assets/check-circle.svg";
import emptyCircleIcon from "/src/assets/empty-circle.svg";

function Circle({ isChecked, onCircleClick }) {
  return (
    <>
      {isChecked ? (
        <img className="circle-icon" src={checkCircleIcon} onClick={onCircleClick} />
      ) : (
        <img className="circle-icon" src={emptyCircleIcon} onClick={onCircleClick} />
      )}
    </>
  );
}

export default Circle;
