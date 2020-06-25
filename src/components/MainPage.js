import React from "react";
import {Task} from "./Task";
import {ListHeading} from "./ListHeading";
import useModal from "../hooks/useModal";
import {Modal} from "./Modal";
import Data from "../data/dataMethods";
import useRemover from "../hooks/useRemover";

export const MainPage = ({listId, currentTasks, updateCurrentTasks}) => {
  const allTasks = Data.userData.task;
  const listTasks = Object.keys(allTasks).filter(id => allTasks[id].listId === listId);
  const {isShowing, toggle} = useModal();
  // const {updateCurrentItems} = useRemover(currentTasks);
  const {updateCurrentItems} = useRemover(listTasks);

  return (
    <main className='page-body'>
      <ListHeading listId={listId}/>
      <div className='tasks-wrapper'>
        {listTasks.map(id => <Task id={id} updateCurrentItems={updateCurrentItems}/>)}
        {/*{currentTasks.map(id => <Task id={id} updateCurrentItems={updateCurrentItems} updateCurrentTasks={updateCurrentTasks}/>)}*/}
        <button onClick={toggle}>Добавить задачу</button>
      </div>
      <Modal isShowing={isShowing} hide={toggle} isTask={true} listId={listId} updateCurrentTasks={updateCurrentTasks}/>
    </main>
  );
};