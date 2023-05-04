import "/src/App.css";
import "/src/common/reset.css";
import "/src/components/TodayDate.css";

function fomattedCurrentDate() {
  let createdTime = new Date();

  const year = createdTime.getFullYear();
  const month = createdTime.getMonth();
  const day = createdTime.getDay();

  return {
    year: year,
    month: month + 1,
    day: day,
  };
}

const months = {
  1: "JAN",
  2: "FEB",
  3: "MAY",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC",
};

function TodayDate() {
  const { year, month, day } = fomattedCurrentDate();

  return (
    <>
      <div className="col">
        <p className="day">{day}</p>
        <div className="row">
          <p className="month">{months[month]}</p>
          <p className="year">{year}</p>
        </div>
      </div>
    </>
  );
}

export default TodayDate;
