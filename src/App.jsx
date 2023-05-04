import "/src/App.css";
import "/src/common/reset.css";
import TodayDate from "/src/components/TodayDate.jsx";
import kebabIcon from "/src/assets/kebab-icon.svg";
import UnfinishedTasks from "/src/components/UnfinishedTasks.jsx";

function App() {
  return (
    <div className="container">
      <header>
        <TodayDate></TodayDate>
        <img className="button-more" src={kebabIcon}></img>
      </header>
      <main>
        <UnfinishedTasks />
      </main>
    </div>
  );
}

export default App;
