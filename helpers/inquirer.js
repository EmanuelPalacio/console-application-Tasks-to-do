import inquirer from "inquirer";
import "colors";
export const inquirerMenu = async () => {
  const question = [
    {
      type: "list",
      name: "option",
      message: "¿Que desea hacer?",
      choices: [
        {
          value: 1,
          name: "1. Crear tarea",
        },
        {
          value: 2,
          name: "2. Listar tareas",
        },
        {
          value: 3,
          name: "3. Listar tareas completadas",
        },
        {
          value: 4,
          name: "4. Lista tareas pendientes",
        },
        {
          value: 5,
          name: "5. Completar tarea(s)",
        },
        {
          value: 6,
          name: "6. Borrar tarea",
        },
        {
          value: 0,
          name: "0. Salir",
        },
      ],
    },
  ];

  console.clear();
  console.log(
    "==========================================================".yellow
  );
  console.log("   Selecione una opción".yellow);
  console.log(
    "==========================================================\n".yellow
  );
  const { option } = await inquirer.prompt(question);

  return option;
};
export const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"ENTER".yellow} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};
export const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};
