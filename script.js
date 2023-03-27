const newTask = document.getElementById('newtask');
const listToDo = document.getElementById('list');

let list = localStorage.getItem('list');

if (list) {
  listToDo.innerHTML = list;
}

document.getElementById('add').setAttribute('type', 'button');

document.getElementById('add').onclick = function() {
  const listItem = document.createElement('li');
  listItem.innerText = newTask.value;
  listToDo.insertBefore(listItem, listToDo.childNodes[0]);
  newTask.value = '';
  
  localStorage.setItem('list', listToDo.innerHTML);
}
