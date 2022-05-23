import React from "react";

import {useState} from 'react'
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count,setCounter] = useState(1)

  // for increasing count
  const handleAdd = ()=>{
    setCounter(count + 1)
  }

  // for decreasing count;
  const handleSub = ()=>{
    if(count > 0){

      setCounter(count - 1)
    }
    else return
  }
  // NOTE: do not delete `data-cy` key value pair

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleAdd}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleSub}>-</button>
    </div>
  );
};

export default Counter;
