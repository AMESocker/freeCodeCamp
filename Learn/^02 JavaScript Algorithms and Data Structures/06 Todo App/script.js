const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn  = document.getElementById('discard-btn');
const tasksContainer  = document.getElementById('tasks-container');
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
//? 'LocalStorage' is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
const taskData = []; //? This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to 'localStorage'.
let currentTask = {}; //? This variable will be used to track the state when editing and discarding tasks.
//? A method to use with the 'classList' property is the 'toggle' method.The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
openTaskFormBtn.addEventListener('click',()=>
  taskForm.classList.toggle('hidden')
);
//? The HTML 'dialog' element has a 'showModal()' method that can be used to display a modal dialog box on a web page.
closeTaskFormBtn.addEventListener('click',()=>
confirmCloseDialog.showModal()
);