import "colors";
import {
  inquirerMenu,
  pause,
  readInput,
  deleteTask,
  confirm,
  SelecTask,
} from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";
import { readDB, saveTask } from "./db/crudDB.js";

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  if (readDB()) {
    tasks.pushTasksFromArray(readDB());
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await readInput("descripción: ");
        tasks.createTask(desc);
        break;
      case 2:
        tasks.viewTasks();
        break;
      case 3:
        tasks.viewCompletedTasks(true);
        break;
      case 4:
        tasks.viewCompletedTasks(false);
        break;
      case 5:
        const ids = await SelecTask(tasks.listArr);
        tasks.completeTask(ids);
        break;
      case 6:
        const id = await deleteTask(tasks.listArr);
        if (id !== 0) {
          const approve = await confirm("¿Esta seguro?");
          approve && tasks.deleteTask(id);
        }
        break;
      case 0:
        tasks.viewCompletedTasks(false);
        break;
    }
    saveTask(tasks.listArr);
    await pause();
  } while (opt !== 0);
};
main();
