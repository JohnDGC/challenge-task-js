let scanf = require('scanf');

let menuApp = function () {
  console.log(
    `------------
    Menú de tareas:
    1. Crear tarea
    2. Ver tarea
    3. Actualizar tarea
    4. Eliminar tarea
    5. Cerrar
    ------------`
  )
}

let enter = function () { 
  console.log("[Enter]");
  option = scanf("%s");
  console.clear();
}

let todoList = [];
let optionTask;
let index;

do {

  menuApp();
  console.log('Qué opción escoge:');
  optionTask = scanf('%d');

  switch (optionTask) {
    case 1:
      console.log('Escriba su tarea:')
      let task = scanf('%s');
      if (!todoList.find(repeat => repeat == task)) {
        todoList.push(task);
        console.log('Tarea guardada', '\n');
      } else console.log('Tarea repetida', '\n');
      enter();
      break;

    case 2:
      console.log('\n','Mostrando tareas')
      todoList.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`));
      enter();
      break;

    case 3:

      console.table(todoList);
      console.log(`Digite el indice de tarea a actualizar (0 - ${todoList.length-1}):`);
      index = scanf('%d');
      if (index <= todoList.length) {
        console.log('Actulice:');
        let newTask = scanf('%S');
        console.clear();
        if (!todoList.find(repeat => repeat == newTask)) {
          todoList[index] = newTask;
          console.table(todoList);
          enter();
        } else {
          console.log('Tarea repetida')
          console.table(todoList);
          enter();
        };
      } else console.log("\n", "Índice inválido", "\n");
      //  && index <= todoList.length 
      break;

    case 4:

      console.table(todoList);
      console.log('Digite el indice de tarea a eliminar:');
      index = scanf('%d');
      if (index <= todoList.length-1) {
        console.log('¿Seguro que quiere elimnar la tarea seleccionada? (y/n)');
        option = scanf('%S');
        if (option == 'n') {
          console.clear();
          console.table(to);
          console.log('Regresando')
          enter();
        } else if (option == 'y') {
          todoList.splice(index, 1);
          console.table(todoList);
          console.log('Eliminado');
          enter();
        }
      } else console.log("\n", "Índice inválido", "\n");
      break;

    default:
      console.clear();
      console.log('\n','Ingrese un valor válido', '\n')
      break;
  }

} while (optionTask !== 5);