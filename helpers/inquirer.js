import inquirer from "inquirer";
import "colors";
export const inquirerMenu = async () => {
  const question = [
    {
      type: "list",
      name: "opción",
      message: "¿Que desea hacer?",
      choices: ["A", "B", "C"],
    },
  ];

  console.clear();
  console.log(
    "==========================================================".cyan
  );
  console.log("   Selecione una opción".cyan);
  console.log(
    "==========================================================\n".cyan
  );
  const opt = await inquirer.prompt(question);

  return opt;
};
