var taskForm = document.querySelector('#task-form');
var task = document.querySelector('#task');
var tableParent = document.querySelector('.collection');
var clearall = document.querySelector('.clear-tasks')
var filter = document.querySelector('#filter')



loadEventListener();

function loadEventListener() {
    //add task 
    taskForm.addEventListener('submit', addtask);

    //remove task
    tableParent.addEventListener('click', removeclass);

    //clear all
    clearall.addEventListener('click', clrall);

    //filter task

        filter.addEventListener('keyup', filtering);
}

function addtask(e) {
    if (task.value === '') {
        alert('please input some data');
    }

    const li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(task.value));

    const ancor = document.createElement('a');
    ancor.className= 'cross me-auto';
    ancor.innerHTML = '<i class="bi bi-eraser"></i>';
    li.appendChild(ancor);
    tableParent.appendChild(li);
    task.value = ' ';

    e.preventDefault();

}


function removeclass(e) {
    if (e.target.parentElement.classList.contains('cross')) {
        if (confirm('are you sure?')) {
                 e.target.parentElement.parentElement.remove();
        }
    }
}


function clrall(e) {
    tableParent.innerHTML = ' ';
    e.preventDefault();
}




function filtering(e) {
    var text = e.target.value.toLowerCase();
    document.querySelectorAll('.list-group-item').forEach(function (task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display='block'
        }else {
               task.style.display = 'none'
        }
    })
}
