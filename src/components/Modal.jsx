import styles from "/src/components/Modal.module.css";
import cancelIcon from "/src/assets/cancel.svg";
import { useState } from "react";
import errorIcon from "/src/assets/error-message-icon.svg";

const LIMIT = 20;

function Modal({ id, onCreate, onClose }) {
  const [textLength, setTextLength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isEmptyValue, setIsEmptyValue] = useState(false);

  const handleGetInputInfo = (e) => {
    const nextValue = e.target.value;
    const nextLength = e.target.value.length;

    setInputValue(nextValue);
    setTextLength(nextLength);
  };

  const handleModalCancel = () => {
    onClose(false);
  };

  const handleCreateItem = () => {
    if (!inputValue) {
      setIsEmptyValue(true);
      return;
    }
    onCreate(id, inputValue, true);
    onClose(false);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>✍할 일</h1>
        <img className={styles.cancelButton} src={cancelIcon} onClick={handleModalCancel} />
      </div>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.modalInput}
          value={inputValue}
          type="text"
          maxLength={LIMIT - 1}
          placeholder="할 일을 입력해주세요"
          onChange={handleGetInputInfo}
        />
        <span className={styles.textLengthLimit}>{`${textLength}/${LIMIT}`}</span>
        {isEmptyValue && (
          <div className={styles.errorBox}>
            <img className={styles.errorIcon} src={errorIcon} />
            <p className={styles.errorMessage}>할 일을 입력해주세요.</p>
          </div>
        )}
      </div>
      <button className={styles.addButton} type="button" onClick={handleCreateItem}>
        추가하기
      </button>
    </div>
  );
}

export default Modal;
