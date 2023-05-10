import "/src/components/ThemeModal.css";

function ThemeModal({ onChange }) {
  const handleChangeThemeColor = (color) => {
    onChange(color);
  };

  return (
    <div className="theme-box">
      <div
        className="purple-btn color-btn"
        onClick={() => {
          handleChangeThemeColor("purple");
        }}
      ></div>
      <div
        className="blue-btn color-btn"
        onClick={() => {
          handleChangeThemeColor("blue");
        }}
      ></div>
      <div
        className="pink-btn color-btn"
        onClick={() => {
          handleChangeThemeColor("pink");
        }}
      ></div>
    </div>
  );
}

export default ThemeModal;
