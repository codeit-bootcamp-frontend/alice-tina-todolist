import "/src/App.css";
import "/src/common/reset.css";
import TodayDate from "/src/components/TodayDate.jsx";
import kebabIcon from "/src/assets/kebab-icon.svg";
import Progress from "/src/components/Progress.jsx";
import TodoListItem from "/src/components/TodoListItem.jsx";
import AddButton from "/src/components/AddButton.jsx";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <header>
        <TodayDate></TodayDate>
        <img className="button-more" src={kebabIcon}></img>
      </header>
      <main>
        <Progress />
        <TodoListItem onInputChange={setValue} listItem={value} />
        <TodoListItem onInputChange={setValue} listItem={value} />
        <TodoListItem onInputChange={setValue} listItem={value} />
        <TodoListItem onInputChange={setValue} listItem={value} />
      </main>
      {/* // <Modal
      //   onCreate={() => console.log("create")}
      //   onDelete={() => console.log("delete")}
      // /> */}
      <AddButton />
    </div>
  );
}

export default App;
