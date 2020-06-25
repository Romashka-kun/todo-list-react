import React from "react";

export const TaskModal = ({updateForm}) => (
  <div className='task-modal modal'>
    <label>
      Задача:
      <input type="text" onChange={e => updateForm('text', e.target.value)}/>
    </label>
    <label>
      Приоритет:
      <input type="range" defaultValue={1} min={1} max={4} step={1}
             onChange={e => updateForm('priority', e.target.value)}/>
    </label>
    <label>
      Дедлайн (опционально):
      <input type="datetime"/>
    </label>
  </div>
);