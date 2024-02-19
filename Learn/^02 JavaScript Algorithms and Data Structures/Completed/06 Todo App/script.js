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
//?A

const taskData = JSON.parse(localStorage.getItem("data")) || []; //?B
let currentTask = {}; //?C

const addOrUpdateTask = () => {
  addOrUpdateTaskBtn.innerText = 'Add Task'
  const dataArrIndex = taskData.findIndex((item) => item === currentTask.id); //?D
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj); //?E
  }else{
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem('data',JSON.stringify(taskData));
  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
  tasksContainer.innerHTML = '';

  taskData.forEach(
    ({ id, title, date, description }) => {
      (tasksContainer.innerHTML += `
        <div class='task' id='${id}'>
          <p><strong>Title: </strong>${title}</p>
          <p><strong>Date: </strong>${date}</p>
          <p><strong>Description: </strong>${description}</p>
          <button type='button' onclick='editTask(this)' class='btn'>Edit</button>
          <button type='button' onclick='deleteTask(this)' class='btn'>Delete</button>
        </div>
      `);//?F
    }    
  );
}


const deleteTask = (buttonEl)=>{
  const dataArrIndex = taskData.findIndex(
    (item)=>item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove()
  taskData.splice(dataArrIndex[1]);//?G
  localStorage.setItem('data',JSON.stringify(taskData));
}

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item)=>item.id === buttonEl.parentElement.id
  );
  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;

  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = 'Update Task';

  taskForm.classList.toggle('hidden');
}

const reset = ()=>{
  titleInput.value = '';
  dateInput.value = ''; 
  descriptionInput.value = '';
  taskForm.classList.toggle('hidden');
  currentTask = {};
}
if(taskData.length){
  updateTaskContainer()
}
//----opening and closing the modal----
openTaskFormBtn.addEventListener(
  "click",() => taskForm.classList.toggle("hidden") //?H
);
//?I
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated = titleInput.value !== currentTask.title||dateInput.value !== currentTask.date||descriptionInput.value !== currentTask.description;
  
  if(formInputsContainValues && formInputValuesUpdated){
    confirmCloseDialog.showModal()
  }else{
    reset()
  }
});
//?J
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});
//----get the values from the input fields----
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //---- add values 'taskData' array to keep track of each task----
  addOrUpdateTask();
});
//? Notes
//? 'localStorage' offers methods for saving, retrieving, and deleting items. The items saved can be of any JavaScript data type. For instance, the 'setItem()' method is used to save an item, and the 'getItem()' method retrieves the item. To delete a specific item, one can utilize the 'removeItem()' method, or if one wants to delete all items in the storage, you can use 'clear()'. Everything saved in localStorage needs to be in string format.

//?A - 'LocalStorage' is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.

//?B - This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to 'localStorage'.

//?C - This variable will be used to track the state when editing and discarding tasks.

//?D - The 'findIndex()' array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns '-1'.

//?E - 'unshift()' is an array method that is used to add one or more elements to the beginning of an array.

//?F - 'this' is a keyword that refers to the current context. In this case, 'this' points to the element that triggers the event - the buttons.

//?G - 'splice()' is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element.

//?H - A method to use with the 'classList' property is the 'toggle' method.The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.

//?I - The HTML 'dialog' element has a 'showModal()' method that can be used to display a modal dialog box on a web page.

//?J - The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

/*
!const myTaskArr = [
!  { task: "Walk the Dog", date: "22-04-2022" },
!  { task: "Read some books", date: "02-11-2023" },
!  { task: "Watch football", date: "10-08-2021" },
!];
!localStorage.setItem("data", JSON.stringify(myTaskArr));

!localStorage.clear()

!const getTaskArr = localStorage.getItem("data");
!console.log(getTaskArr);

!const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
!console.log(getTaskArrObj)
*/