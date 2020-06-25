import React from "react";
import {SideBar} from "./SideBar";
import {MainPage} from "./MainPage";
import {Header} from "./Header";
import useActiveList from "../hooks/useActiveList";
import useCurrentTasks from "../hooks/useCurrentTasks";
import Data from "../data/dataMethods";


export const App = () => {
  const {activeList, updateActiveList} = useActiveList(3);
  const {currentTasks, updateCurrentTasks} = useCurrentTasks(Object.keys(Data.userData.task).filter(id => Data.userData.task[id].listId === activeList));

  return (
    <div className='container'>
      <Header/>
      <div className='page-layout'>
        <SideBar listId={activeList} updateActiveList={updateActiveList}
                 updateCurrentTasks={updateCurrentTasks}/>
        <MainPage listId={activeList} currentTasks={currentTasks} updateCurrentTasks={updateCurrentTasks}/>
      </div>
    </div>
  );
};