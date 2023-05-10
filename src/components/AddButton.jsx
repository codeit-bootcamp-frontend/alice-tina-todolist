import "/src/components/AddButton.css";
import purpleAddBtn from "/src/assets/purple-add-button.svg";
import blueAddBtn from "/src/assets/blue-add-button.svg";
import pinkAddBtn from "/src/assets/pink-add-button.svg";

function AddButton({ onShow, color = "purple" }) {
  const handleShowModal = () => {
    onShow(true);
  };

  const getAddButtonImg = () => {
    if (color === "purple") {
      return <img className="add-button" src={purpleAddBtn} onClick={handleShowModal} />;
    } else if (color === "blue") {
      return <img className="add-button" src={blueAddBtn} onClick={handleShowModal} />;
    } else {
      return <img className="add-button" src={pinkAddBtn} onClick={handleShowModal} />;
    }
  };

  return getAddButtonImg();
}

export default AddButton;
