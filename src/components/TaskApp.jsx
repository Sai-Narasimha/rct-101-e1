import React from "react";

import styles from "./taskApp.module.css";

import TaskHeader from './TaskHeader/TaskHeader'

import AddTask from './AddTask/AddTask'

import Tasks from './Task/Task'

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Tasks/>

    </div>
  );
};

export default TaskApp;
