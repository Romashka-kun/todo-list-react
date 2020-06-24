import React from "react";

export function ListModal() {
  return (
    <div className='list-modal modal'>
      <label>
        Название списка:
        <input type="text"/>
      </label>
      <label>
        Описание (опционально):
        <input type="text"/>
      </label>
    </div>
  );
}