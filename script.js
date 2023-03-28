const newTask = document.getElementById('newtask');
const listToDo = document.getElementById('list');

let list = localStorage.getItem('list');

if (list) {
  listToDo.innerHTML = list;
  
  // Add event listeners to edit and trash buttons
  const editIcons = document.querySelectorAll('.edit-icon');
  const trashIcons = document.querySelectorAll('.trash-icon');
  
  editIcons.forEach(function(editIcon) {
    editIcon.addEventListener('click', function() {
      const listItem = this.parentNode;
      const editText = prompt('Enter updated text:');
      if (editText) {
        listItem.firstChild.textContent = editText;
        localStorage.setItem('list', listToDo.innerHTML);
      }
    });
  });
  
  trashIcons.forEach(function(trashIcon) {
    trashIcon.addEventListener('click', function() {
      const listItem = this.parentNode;
      listItem.remove();
      localStorage.setItem('list', listToDo.innerHTML);
    });
  });
}

document.getElementById('add').setAttribute('type', 'button');

document.getElementById('add').onclick = function() {
  const listItem = document.createElement('li');
  const edit = document.createElement('img');
  edit.setAttribute('src', 'images/edit.svg');
  edit.classList.add('edit-icon');
  edit.addEventListener('click', function() {
    const listItem = this.parentNode;
    const editText = prompt('Enter updated text:');
    if (editText) {
      listItem.firstChild.textContent = editText;
      localStorage.setItem('list', listToDo.innerHTML);
    }
  });
  
  const trash = document.createElement('img');
  trash.setAttribute('src', 'images/trash.svg');
  trash.classList.add('trash-icon');
  trash.addEventListener('click', function() {
    const listItem = this.parentNode;
    listItem.remove();
    localStorage.setItem('list', listToDo.innerHTML);
  });

  listItem.innerText = newTask.value;
  listItem.appendChild(edit);
  listItem.appendChild(trash);
  
  listToDo.insertBefore(listItem, listToDo.childNodes[0]);
  newTask.value = '';
  
  localStorage.setItem('list', listToDo.innerHTML);
}
