import "colors";
import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";
import { readDB, saveTask } from "./db/crudDB.js";

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await readInput("descripción: ");
        tasks.createTask(desc);
        break;
      case 2:
        console.log(readDB());
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
