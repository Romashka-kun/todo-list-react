import React from "react";
import demo from "../data/userData";
import {List} from "./List";

export function SideBar() {
  const lists = demo.list.map(list => <h3><List id={list.id}/></h3>);
  return (
    <nav className='sidebar'>
      <div className='default-lists'>
        <h3>Сегодня</h3>
        <h3>Следующие 7 дней</h3>
        <h3>За всё время</h3>
      </div>
      <div className='user-lists'>
        {lists}
        <button>Новый список</button>
      </div>
    </nav>
  );
}