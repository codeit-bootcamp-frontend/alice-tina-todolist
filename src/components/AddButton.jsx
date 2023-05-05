import "/src/components/AddButton.css";
import purpleAddBtn from "/src/assets/purple-add-button.svg";

function AddButton({ onShow }) {
  // const [isShow, setIsShow] = useState(false);
  const handleShowModal = () => {
    onShow(true);
  };

  return (
    <>
      <img
        className="add-button"
        src={purpleAddBtn}
        onClick={handleShowModal}
      />
    </>
  );
}

export default AddButton;
