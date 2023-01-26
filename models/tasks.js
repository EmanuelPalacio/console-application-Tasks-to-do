import Task from "./task.js";

export default class Tasks {
  constructor() {
    this._list = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }
}
