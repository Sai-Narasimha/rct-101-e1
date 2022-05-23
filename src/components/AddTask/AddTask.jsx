import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [addTask, setAddTask] = useState([])

  const handleAddTask = (e)=>{
    

    setAddTask({...addTask,
    
    })
  }
console.log(addTask)

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button"  onClick = {handleAddTask}>Add Todo</button>
    </div>
  );
};

export default AddTask;
