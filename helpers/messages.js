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
    console.log("   Selecione una opción".blue);
    console.log(
      "==========================================================\n".green
    );

    console.log(`${"1.".blue} Crear tarea`);
    console.log(`${"2.".blue} Listar tareas`);
    console.log(`${"3.".blue} Listar tareas completadas`);
    console.log(`${"4.".blue} Lista tareas pendientes`);
    console.log(`${"5.".blue} Completar tarea(s)`);
    console.log(`${"1.".blue} Borrar tarea`);
    console.log(`${"0.".blue} Salir \n`);

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
