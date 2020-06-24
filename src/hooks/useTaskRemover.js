import { useState } from 'react';

const useTaskRemover = (initialValue) => {
  const [currentTasks, setCurrentTasks] = useState(initialValue);

  function updateCurrentTasks(id) {
    setCurrentTasks(currentTasks.splice(currentTasks.indexOf(id), 1));
  }

  return {
    currentTasks,
    updateCurrentTasks,
  }
};

export default useTaskRemover;