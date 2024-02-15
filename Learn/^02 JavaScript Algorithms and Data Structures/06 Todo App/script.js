const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
//? 'LocalStorage' is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
const taskData = []; //? This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to 'localStorage'.
let currentTask = {}; //? This variable will be used to track the state when editing and discarding tasks.

const reset = ()=>{
  titleInput.value = '';
  dateInput.value = ''; 
  descriptionInput.value = '';
  taskForm.classList.toggle('hidden');
  currentTask = {};
}
//----opening and closing the modal----
openTaskFormBtn.addEventListener(
  "click",() => taskForm.classList.toggle("hidden") //? A method to use with the 'classList' property is the 'toggle' method.The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
);
//? The HTML 'dialog' element has a 'showModal()' method that can be used to display a modal dialog box on a web page.
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  if(formInputsContainValues){
    confirmCloseDialog.showModal()
  }else{
    reset()
  }
  confirmCloseDialog.showModal();
});
//? The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

//----get the values from the input fields----
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataArrIndex = taskData.findIndex((item) => item === currentTask.id); //? The 'findIndex()' array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns '-1'.

  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };
  //---- add values 'taskData' array to keep track of each task----
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj); //? 'unshift()' is an array method that is used to add one or more elements to the beginning of an array.
  }

  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
        <div class='task' id='${id}'>
          <p><strong>Title: </strong>${title}</p>
          <p><strong>Date: </strong>${date}</p>
          <p><strong>Description: </strong>${description}</p>
          <button type='button' class='btn'>Edit</button>
          <button type='button' class='btn'>Delete</button>
        </div>
      `;
  });
  reset();
});
