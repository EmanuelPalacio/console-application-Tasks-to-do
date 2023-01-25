import "colors";
import { showMenu, pause } from "./helpers/messages.js";
const main = async () => {
  let opt = "";
  do {
    opt = await showMenu();
    console.log({ opt });
    opt !== "0" && (await pause());
  } while (opt !== "0");
};
main();
