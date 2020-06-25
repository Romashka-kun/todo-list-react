import React from "react";
import Data from "../data/dataMethods";
import deleteIcon from "../resources/deleteIcon.png"

export const Task = ({id, updateCurrentItems, updateCurrentTasks}) => {
  return (
    <div className='task'>
      <label>
        <input type='checkbox' defaultChecked={Data.userData.task[id].completed} onChange={() => Data.changeStatus(id)}/>
        {Data.userData.task[id].text}
      </label>
      <img src={deleteIcon} alt='Delete Icon' onClick={() => {
        updateCurrentItems(id);
        Data.removeTask(id);
      }}/>
    </div>
  );
};