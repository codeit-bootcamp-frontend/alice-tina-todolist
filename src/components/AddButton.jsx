import "/src/components/AddButton.css";
import purpleAddBtn from "/src/assets/purple-add-button.svg";
import Modal from "/src/components/Modal.jsx";
import { useState } from "react";

function AddButton() {
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <img
        className="add-button"
        src={purpleAddBtn}
        onClick={handleShowModal}
      />
      {isShow ? (
        <>
          <div className="dard-background"></div>
          <Modal
            onCreate={() => console.log("create")}
            onDelete={setIsShow}
          />
        </>
      ) : null}
    </>
  );
}

export default AddButton;
