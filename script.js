
const newTask = document.getElementById('newtask');
const listToDo = document.getElementById('list');

let list;

  document.getElementById('add').onclick = function() {
    list = newTask.value;
    listToDo.innerHTML += list;
  }


