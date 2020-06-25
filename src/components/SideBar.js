import React from "react";
import {List} from "./List";
import Data from "../data/dataMethods";
import useModal from "../hooks/useModal";
import {Modal} from "./Modal";
import useRemover from "../hooks/useRemover";

export const SideBar = ({listId, updateActiveList, updateCurrentTasks}) => {
  const dataList = Object.keys(Data.userData.list);
  const {isShowing, toggle} = useModal();
  const {updateCurrentItems} = useRemover(dataList);
  const lists = dataList.map(id => <h3 className='user-list' onClick={() => {
    updateActiveList(id);
    updateCurrentTasks(id)
  }}>
    <List listId={id} updateCurrentItems={updateCurrentItems} isSideBar/>
  </h3>);
  return (
    <nav className='sidebar'>
      <div className='default-lists'>
        <h3>Сегодня</h3>
        <h3>Следующие 7 дней</h3>
        <h3>За всё время</h3>
      </div>
      <div className='user-lists'>
        {lists}
        <button onClick={toggle}>Новый список</button>
      </div>
      <Modal isShowing={isShowing} hide={toggle} isTask={false} listId={listId}/>
    </nav>
  );
};