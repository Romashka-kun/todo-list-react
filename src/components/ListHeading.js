import * as React from "react";
import {List} from "./List";
import Data from "../data/dataMethods";

export const ListHeading = ({listId}) => {
  return (
    <div className='list-heading'>
      <h1><List listId={listId}/></h1>
      {Data.userData.list[listId].description && <div>{Data.userData.list[listId].description}</div>}
    </div>
  );
};