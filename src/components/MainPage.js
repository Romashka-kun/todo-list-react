import React from "react";
import {Task} from "./Task";
import {ListHeading} from "./ListHeading";
import useModal from "../hooks/useModal";
import {Modal} from "./Modal";
import Data from "../data/dataMethods";
import useTaskRemover from "../hooks/useTaskRemover";

export const MainPage = ({ listId }) => {
  const allTasks = Data.userData.task;
  const listTasks = Object.keys(allTasks).filter(id => allTasks[id].listId === listId);
  const {isShowing, toggle} = useModal();
  const {updateCurrentTasks} = useTaskRemover(listTasks);

  return (
    <main className='page-body'>
      <ListHeading id={listId}/>
      <div className='tasks-wrapper'>
        {listTasks.map(id => <Task id={id} updateCurrentTasks={updateCurrentTasks}/>)}
        <button onClick={toggle}>Добавить задачу</button>
      </div>
      <Modal isShowing={isShowing} hide={toggle} isTask={true} listId={listId}/>
    </main>
  );
};