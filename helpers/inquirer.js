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
          name: `${"1.".magenta} Crear tarea`,
        },
        {
          value: 2,
          name: `${"2.".magenta} Listar tareas`,
        },
        {
          value: 3,
          name: `${"3.".magenta} Listar tareas completadas`,
        },
        {
          value: 4,
          name: `${"4.".magenta} Lista tareas pendientes`,
        },
        {
          value: 5,
          name: `${"5.".magenta} Completar tarea(s)`,
        },
        {
          value: 6,
          name: `${"6.".magenta} Borrar tarea`,
        },
        {
          value: 0,
          name: `${"0.".magenta} Salir`,
        },
      ],
    },
  ];

  console.clear();
  console.log(
    "==========================================================".magenta
  );
  console.log("   Selecione una opción");
  console.log(
    "==========================================================\n".magenta
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
export const deleteTask = async (tasks) => {
  const choices = tasks.map((task, i) => {
    const position = `${i + 1}`.magenta;
    return {
      value: task.id,
      name: `${position}. ${task.description}`,
    };
  });
  choices.push({
    value: 0,
    name: `${"0. ".magenta}Cancelar`,
  });
  const question = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(question);

  return id;
};
export const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};
