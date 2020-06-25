import { useState } from 'react';
import Data from "../data/dataMethods";

const useCurrentTasks = (initialValue) => {
  const [currentTasks, setCurrentTasks] = useState(initialValue);

  function updateCurrentTasks(listId) {
    const allTasks = Data.userData.task;
    const listTasks = Object.keys(allTasks).filter(id => allTasks[id].listId === parseFloat(listId));
    setCurrentTasks(listTasks);
  }

  return {
    currentTasks,
    updateCurrentTasks,
  }
};

export default useCurrentTasks;