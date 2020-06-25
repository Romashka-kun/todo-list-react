import React from "react";

export const ListModal = ({updateForm}) => (
  <div className='list-modal modal'>
    <label>
      Название списка:
      <input type="text" onChange={e => updateForm('name', e.target.value)}/>
    </label>
    <label>
      Описание (опционально):
      <input type="text" onChange={e => updateForm('description', e.target.value)}/>
    </label>
  </div>
);