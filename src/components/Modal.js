import React from "react";
import ReactDOM from 'react-dom';
import {TaskModal} from "./TaskModal";
import {ListModal} from "./ListModal";
import Data from "../data/dataMethods";
import useForm from "../hooks/useForm";

export const Modal = ({isShowing, hide, isTask, listId}) => {
  const [addItem, initialValue] = isTask
    ? ['addTask', { text: '', priority: 1, deadline: 0, listId, completed: false }]
    : ['addList', { name: '', description: '' }];
  const {form, updateForm} = useForm(initialValue);
  const modalType = isTask ? <TaskModal updateForm={updateForm} /> : <ListModal updateForm={updateForm} />;

  return isShowing ? ReactDOM.createPortal(
    <div className='modal-overlay' onClick={hide}>
      <div className='modal-wrapper' onClick={e => e.stopPropagation()}>
        {modalType}
        <button className='modal-close' onClick={() => {
          Data[addItem](form);
          hide();
        }}>
          Создать
        </button>
      </div>
    </div>, document.body
  ) : null;
};