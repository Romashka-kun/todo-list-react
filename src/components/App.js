import React from "react";
import {SideBar} from "./SideBar";
import {MainPage} from "./MainPage";
import {Header} from "./Header";
import useActiveList from "../hooks/useActiveList";


export const App = () => {
  const {activeList, updateActiveList} = useActiveList(3);

  return (
    <div className='container'>
      <Header/>
      <div className='page-layout'>
        <SideBar listId={activeList} updateActiveList={updateActiveList}/>
        <MainPage listId={activeList}/>
      </div>
    </div>
  );
};