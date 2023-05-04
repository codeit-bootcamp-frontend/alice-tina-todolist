import "/src/components/UnfinishedTasks.css"

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

function UnfinishedTasks({ totalTasks = 10, finishedTasks = 3 }) {
  return <p className="tasks">{getUnfinishedTasks(totalTasks, finishedTasks)}</p>;
}

export default UnfinishedTasks;
