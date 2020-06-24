import { useState } from 'react';

const useActiveList = (initialValue) => {
  const [activeList, setActiveList] = useState(initialValue);

  function updateActiveList(listId) {
    setActiveList(listId);
  }

  return {
    activeList,
    updateActiveList,
  }
};

export default useActiveList;