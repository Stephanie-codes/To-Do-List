const newTask = document.getElementById('newtask');
const listToDo = document.getElementById('list');

let list = localStorage.getItem('list');

//Add items to the to do list & save in localStorage
document.getElementById('add').onclick = function() {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'myCheckbox';  
  checkbox.addEventListener('click', function() {
    if (this.checked) {
      listItem.classList.add('strikethrough');
    } else {
      listItem.classList.remove('strikethrough');
    }
  });

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
  listItem.insertBefore(checkbox, listItem.firstChild);

  
  listToDo.insertBefore(listItem, listToDo.childNodes[0]);
  newTask.value = '';
  
  localStorage.setItem('list', listToDo.innerHTML);
}

// Add event listeners to edit and trash buttons
if (list) {
  listToDo.innerHTML = list;
  
  const editIcons = document.querySelectorAll('.edit-icon');
  const trashIcons = document.querySelectorAll('.trash-icon');
  
  listToDo.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-icon')) {
      const listItem = event.target.parentNode;
      const editText = prompt('Enter updated text:');
      if (editText) {
        listItem.firstChild.textContent = editText;
        localStorage.setItem('list', listToDo.innerHTML);
      }
    } else if (event.target.classList.contains('trash-icon')) {
      const listItem = event.target.parentNode;
      listItem.remove();
      localStorage.setItem('list', listToDo.innerHTML);
    }
  });  
}