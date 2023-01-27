import Task from "./task.js";

export default class Tasks {
  constructor() {
    this._list = {};
  }

  get listArr() {
    const convertToArray = [];
    Object.keys(this._list).forEach((key) =>
      convertToArray.push(this._list[key])
    );
    return convertToArray;
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

  viewTasks() {
    this.listArr.forEach((task, i) => {
      const { completedIn, description } = task;
      const position = `${i + 1}`.magenta;
      const condition = completedIn ? `completado`.green : `pendiente`.red;
      console.log(`${position} ${description} :: ${condition}`);
    });
  }
  viewCompletedTasks(condition) {
    const filterTasks = this.listArr.filter((elem) => {
      return elem.completedIn === condition;
    });

    filterTasks.forEach((task, i) => {
      const { completedIn, description } = task;
      const position = `${i + 1}`.magenta;
      const condition = completedIn ? `completado`.green : `pendiente`.red;
      console.log(`${position} ${description} :: ${condition}`);
    });
  }
  deleteTask(id) {
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}
