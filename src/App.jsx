import "/src/App.css";
import "/src/common/reset.css";
import TodayDate from "/src/components/TodayDate.jsx";
import kebabIcon from "/src/assets/kebab-icon.svg";
import Progress from "/src/components/Progress.jsx";
import TodoListItem from "/src/components/TodoListItem.jsx";
import AddButton from "/src/components/AddButton.jsx";
import Modal from "/src/components/Modal";
import { useRef, useState } from "react";

function App() {
  const [listItems, setListItems] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [idList, setIdList] = useState([]);
  const newID = useRef(1);

  const obj = {
    1: {
      id: 1,
      title: "리액트 공부",
    },
    2: {
      id: 2,
      title: "수영하기",
    },
  };

  // localStorage.setItem("obj", JSON.stringify(obj));
  // const myObj = JSON.parse(localStorage.getItem("obj"));
  // console.log(myObj);

  // useEffect(() => {
  //   // localstorage 저장
  // }, [listItems])

  const handleSetItems = () => {
    localStorage.setItem("obj", JSON.stringify(obj));
    const myObj = JSON.parse(localStorage.getItem("obj"));
    setListItems(myObj);
  };

  const handleUpdate = (id, title, isCreate = false) => {
    if (isCreate) {
      setIdList([...idList, id]);
      newID.current++;
    }

    setListItems({
      ...listItems,
      [id]: title,
    });
  };

  const handleDeleteItem = (targetId) => {
    delete listItems[targetId];
    setListItems({ ...listItems });

    const nextIdList = idList.filter((id) => id !== targetId);

    setIdList(nextIdList);
  };

  console.log(idList, listItems);

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
              onInputChange={handleUpdate}
              listItem={listItems[id]}
              onDelete={handleDeleteItem}
            />
          ))}
      </main>
      <AddButton onShow={setIsShow} />
      {isShow ? (
        <>
          <div className="dard-background"></div>
          <Modal
            id={newID.current}
            onCreate={handleUpdate}
            onClose={setIsShow}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
