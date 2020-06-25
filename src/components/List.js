import React from "react";
import Data from "../data/dataMethods";
import deleteIcon from "../resources/deleteIcon.png";

export const List = ({listId,  updateCurrentItems, isSideBar}) => {
  return (
    <span className='list'>
      {Data.userData.list[listId].name}
      {isSideBar && <img src={deleteIcon} alt='Delete Icon' onClick={() => {
        updateCurrentItems(listId);
        Data.removeList(listId);
      }}/>}
    </span>
  );
};