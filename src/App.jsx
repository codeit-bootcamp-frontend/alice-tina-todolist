import "/src/App.css";
import "/src/common/reset.css";
import TodayDate from "/src/components/TodayDate.jsx";
import kebabIcon from "/src/assets/kebab-icon.svg";
import Progress from "/src/components/Progress.jsx";
import TodoListItem from "/src/components/TodoListItem.jsx";
import AddButton from "/src/components/AddButton.jsx";
import Modal from "/src/components/Modal";
import ThemeModal from "./components/ThemeModal";
import purpleDdopi from "/src/assets/purple-ddopi.png";
import blueDdopi from "/src/assets/blue-ddopi.png";
import pinkDdopi from "/src/assets/pink-ddopi.png";
import { useEffect, useRef, useState } from "react";

function App() {
  const [listItems, setListItems] = useState({});
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isShowingTheme, setIsShowingTheme] = useState(false);
  const [idList, setIdList] = useState([]);
  const [themeColor, setThemeColor] = useState("purple");
  const newID = useRef(1);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("listItems"));

    if (localItems) {
      const keys = Object.keys(localItems);
      if (keys.length !== 0) {
        newID.current = Number(keys[keys.length - 1]) + 1;
        setListItems(localItems);
        setIdList(keys);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const handleInputUpdate = (id, title, isCreate = false) => {
    if (isCreate) {
      setIdList([...idList, id]);
      newID.current++;

      const deepcopy = JSON.parse(JSON.stringify(listItems));
      setListItems({
        ...deepcopy,
        [id]: {
          title,
          checked: false,
        },
      });
    } else {
      listItems[id].title = title;
      const deepcopy = JSON.parse(JSON.stringify(listItems));
      setListItems({ ...deepcopy });
    }
  };

  const handleCheckedUpdate = (id, checked) => {
    listItems[id].checked = checked;
    const deepcopy = JSON.parse(JSON.stringify(listItems));
    setListItems({
      ...deepcopy,
    });
  };

  const handleDeleteItem = (targetId) => {
    delete listItems[targetId];
    const deepcopy = JSON.parse(JSON.stringify(listItems));
    setListItems({ ...deepcopy });

    const nextIdList = idList.filter((id) => id !== targetId);
    setIdList(nextIdList);
  };

  const getFinishedTasks = () => {
    let totalTasks = 0;
    for (const value of Object.values(listItems)) {
      if (value.checked) {
        totalTasks++;
      }
    }
    return totalTasks;
  };

  const getDdopi = () => {
    if (themeColor === "purple") {
      return <img src={purpleDdopi} className="ddopi" />;
    } else if (themeColor === "blue") {
      return <img src={blueDdopi} className="ddopi" />;
    } else {
      return <img src={pinkDdopi} className="ddopi" />;
    }
  };

  const handleToggleTheme = () => {
    setIsShowingTheme(!isShowingTheme);
  };

  return (
    <div className="container">
      <header>
        <TodayDate></TodayDate>
        <img className="button-more" src={kebabIcon} onClick={handleToggleTheme}></img>
        {isShowingTheme && <ThemeModal />}
      </header>
      <main>
        <Progress total={idList.length} finished={getFinishedTasks()} color={themeColor} />
        <div className="list-container">
          {listItems &&
            idList.map((id) => (
              <TodoListItem
                key={id}
                id={id}
                listItem={listItems[id]}
                onInputChange={handleInputUpdate}
                onCheckedChange={handleCheckedUpdate}
                onDelete={handleDeleteItem}
              />
            ))}
        </div>
        {idList.length === 0 && (
          <>
            {getDdopi()}
            <p className="intro">멋진 하루를 계획해 봐요 :&#41;</p>
          </>
        )}
      </main>
      <AddButton onShow={setIsShowingModal} color={themeColor} />
      {isShowingModal ? (
        <>
          <div className="dard-background"></div>
          <Modal id={newID.current} onCreate={handleInputUpdate} onClose={setIsShowingModal} />
        </>
      ) : null}
    </div>
  );
}

export default App;
