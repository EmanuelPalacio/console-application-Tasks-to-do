import "colors";
import { resolve } from "path";
import readline from "readline";

export const pause = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(`\nPresiona ${"ENTER".green} para continuar \n`, (opt) => {
      rl.close();
      resolve();
    });
  });
};
export const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log(
      "==========================================================".green
    );
    console.log("   Selecione una opción".green);
    console.log(
      "==========================================================\n".green
    );

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Lista tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"1.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir \n`);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Selecione una opción: ", (opt) => {
      rl.close();
      resolve(opt);
    });
  });
};
