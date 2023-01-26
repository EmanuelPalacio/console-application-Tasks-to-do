import Task from "./task.js";

export default class Tasks {
  constructor() {
    this._list = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  pushTasksFromArray(db = []) {
    db.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  get listArr() {
    const convertToArray = [];
    Object.keys(this._list).forEach((key) =>
      convertToArray.push(this._list[key])
    );
    return convertToArray;
  }
}
