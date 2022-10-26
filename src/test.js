let scanf = require("scanf");

let menuApp = function () {
  console.log(
    `
    Menú de tareas:
    1. Crear tarea
    2. Ver tarea
    3. Actualizar tarea
    4. Eliminar tarea
    5. Cerrar
    `
  );
};
// menuApp();

let todoList = [];
let optionTask;
// let finish;

do {
  menuApp();
  console.log("Qué opción escoge:");
  optionTask = scanf("%d");

  switch (optionTask) {
    case 1:
      console.log("Escriba su tarea:");
      // let next;
      // do {
      let task = scanf("%s");
      todoList.push(task);
      console.log("Tarea guardada");
      //   console.log('Guardar otra tarea (si/no):');
      //   let next = scanf('%s');

      //   switch (next) {
      //     case 'si':

      //       break;
      //     case 'no':
      //     console.log('Regresando al menú principal');
      //       break;
      //     // default: console.log('Escriba una opción válida')
      //     //   break;
      //   }
      // } while (next != 'no');
      break;

    case 2:
      console.log("¿Cual tarea desea ver?");
      index = scanf("%d");
      todoList.forEach((task, index) => console.log(""));

      break;

    default:
      break;
  }
} while (optionTask !== 5);
