import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'
const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    
    <div>

      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task/>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        
      </div>
    </div>
    
  );
};

export default Tasks;
