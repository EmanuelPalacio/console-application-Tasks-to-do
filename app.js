import "colors";
import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
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
        break;

      default:
        break;
    }
    saveTask(tasks.listArr);
    await pause();
  } while (opt !== 0);
};
main();
