import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">Uncompleted : {unCompletedTask}</b>
      <br></br>
      <b data-cy="header-total-task">Total Tasks : {totalTask}</b>
    </div>
  );
};

export default TaskHeader;
