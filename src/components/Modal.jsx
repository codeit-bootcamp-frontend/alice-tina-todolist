import styles from "/src/components/Modal.module.css";
import cancelIcon from "/src/assets/cancel.svg";
import { useState } from "react";

const LIMIT = 20;

function Modal({ onCreate, onDelete }) {
  const [textLength, setTextLength] = useState(0);

  const handleTextLengthCheck = (e) => {
    const nextLength = e.target.value.length;
    setTextLength(nextLength);
  };

  const handleModalCancel = () => {
    onDelete(false);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>✍할 일</h1>
        <img
          className={styles.cancelButton}
          src={cancelIcon}
          onClick={handleModalCancel}
        />
      </div>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.modalInput}
          type="text"
          maxLength={LIMIT - 1}
          placeholder="할 일을 입력해주세요"
          onChange={handleTextLengthCheck}
        />
        <span
          className={styles.textLengthLimit}
        >{`${textLength}/${LIMIT}`}</span>
      </div>

      <button className={styles.addButton} type="button" onClick={onCreate}>
        추가하기
      </button>
    </div>
  );
}

export default Modal;
