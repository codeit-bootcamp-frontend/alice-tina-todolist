import "/src/App.css";
import "/src/common/reset.css";
import TodayDate from "/src/components/TodayDate.jsx";
import kebabIcon from "/src/assets/kebab-icon.svg";
import Progress from "/src/components/Progress.jsx";
import TodoListItem from "/src/components/TodoListItem.jsx";
import AddButton from "/src/components/AddButton.jsx";
import Modal from "/src/components/Modal";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState(null);
  const [isShow, setIsShow] = useState(false);

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

  const idxList = [1, 2];

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

  const handleUpdate = (id, title) => {
    setListItems({
      ...listItems,
      [id]: title,
    });
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
          idxList.map((idx) => (
            <TodoListItem
              key={listItems[idx]?.id}
              id={listItems[idx]?.id}
              onInputChange={handleUpdate}
              listItem={listItems[idx]?.title}
            />
          ))}
      </main>
      <AddButton onShow={setIsShow}/>
      {isShow ? (
        <>
          <div className="dard-background"></div>
          <Modal onCreate={() => console.log("create")} onDelete={setIsShow} />
        </>
      ) : null}
    </div>
  );
}

export default App;
