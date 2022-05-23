import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'
const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
 const tasks = [
  {
    "id": 1,
    "text": "Push up",
    "done": true,
    "count": 2
  },
  {
    "id": 2,
    "text": "Pull Up",
    "done": true,
    "count": 3
  },
  {
    "id": 3,
    "text": "Squats",
    "done": false,
    "count": 1
  },
  {
    "id": 4,
    "text": "Sprint",
    "done": false,
    "count": 5
  },
  {
    "id": 5,
    "text": "Stairs",
    "done": false,
    "count": 200
  }
]
  return (
    <>
    {tasks.map((task)=>(
       <li data-cy="task" className={styles.task}>
       <input type="checkbox" data-cy="task-checkbox" />
       <div data-cy="task-text">{task.text}</div>
       {/* Counter here */}
       <Counter/>
       <button data-cy="task-remove-button"> Del</button>
     </li>
    ))}
     
    </>

  );
};

export default Task;
