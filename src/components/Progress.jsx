import "/src/components/Progress.css";

function getUnfinishedTasks(totalTasks, finishedTasks) {
  const restTasks = totalTasks - finishedTasks;
  const percentage = (finishedTasks / totalTasks) * 100;

  let progressEmoji;

  if (percentage === 100) {
    progressEmoji = "🎉";
  } else if (percentage > 66) {
    progressEmoji = "🔥";
  } else if (percentage > 33) {
    progressEmoji = "🏃‍♂️";
  } else {
    progressEmoji = "💪";
  }

  return `${restTasks} Tasks${progressEmoji}`;
}

function Progress({ total, finished }) {
  return <p className="tasks">{getUnfinishedTasks(total, finished)}</p>;
}

export default Progress;
