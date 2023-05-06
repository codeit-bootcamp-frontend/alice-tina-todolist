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
    const keys = Object.keys(localItems);

    if (keys.length !== 0) {
      newID.current = Number(keys[keys.length - 1]) + 1;
      setListItems(localItems);
      setIdList(keys);
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

  return (
    <div className="container">
      <header>
        <TodayDate></TodayDate>
        <img className="button-more" src={kebabIcon}></img>
      </header>
      <main>
        <Progress total={idList.length} finished={getFinishedTasks()} />
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
