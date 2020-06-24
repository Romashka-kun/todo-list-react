import demo from "./userData";

const Data = {
  init() {
    this.userData = JSON.parse(localStorage.getItem('todolist')) || demo;
  },

  updateStorage() {
    localStorage.setItem('todolist', JSON.stringify(this.userData));
  },

  addTask(task) {
    if (task.text.length > 0) {
      this.userData.task[new Date().getTime()] = task;
      this.updateStorage();
    }
  },

  removeTask(taskId) {
    delete this.userData.task[taskId];
    this.updateStorage();
  },

  changeStatus(taskId) {
    this.userData.task[taskId].completed = !this.userData.task[taskId].completed;
    this.updateStorage();
  },

  addList(list) {
    this.userData.list.push(list);
  },

  removeList(listId) {
    this.userData.list.splice(listId, 1);
  }
};

export default Data;