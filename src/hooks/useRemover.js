import { useState } from 'react';

const useRemover = (initialValue) => {
  const [currentItems, setCurrentItems] = useState(initialValue);

  function updateCurrentItems(id) {
    setCurrentItems(currentItems.splice(currentItems.indexOf(id), 1));
  }

  return {
    updateCurrentItems,
  }
};

export default useRemover;