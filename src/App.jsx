import "/src/App.css";
import "/src/common/reset.css";
import TodayDate from "/src/components/TodayDate.jsx";
import kebabIcon from "/src/assets/kebab-icon.svg";
import Progress from "/src/components/Progress.jsx";
import TodoListItem from "/src/components/TodoListItem.jsx";
import AddButton from "/src/components/AddButton.jsx";
import Modal from "/src/components/Modal";
import { useEffect, useRef, useState } from "react";

function App() {
  const [listItems, setListItems] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [idList, setIdList] = useState([]);
  const newID = useRef(1);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("listItems"));
    if (localItems) {
      setListItems(localItems);
      setIdList(Object.keys(localItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const handleSetItems = () => {
    localStorage.setItem("obj", JSON.stringify(obj));
    const myObj = JSON.parse(localStorage.getItem("obj"));
    setListItems(myObj);
    setIdList(Object.keys(myObj));
  };

  const handleInputUpdate = (id, title, isCreate = false) => {
    if (isCreate) {
      setIdList([...idList, id]);
      newID.current++;
    }

    const deepcopy = JSON.parse(JSON.stringify(listItems));
    setListItems({
      ...deepcopy,
      [id]: {
        title,
        checked: false,
      },
    });
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

  return (
    <div className="container">
      <button onClick={handleSetItems}>클릭!</button>
      <header>
        <TodayDate></TodayDate>
        <img className="button-more" src={kebabIcon}></img>
      </header>
      <main>
        <Progress />
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
      </main>
      <AddButton onShow={setIsShow} />
      {isShow ? (
        <>
          <div className="dard-background"></div>
          <Modal id={newID.current} onCreate={handleInputUpdate} onClose={setIsShow} />
        </>
      ) : null}
    </div>
  );
}

export default App;
