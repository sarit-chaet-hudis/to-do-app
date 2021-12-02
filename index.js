const createTaskButton = document.querySelector(".createTaskButton");
const taskListUL = document.querySelector(".taskList");
let listFromStorage;
if (localStorage.getItem("listItems")) {
  //localstorage already has list
  listItems = JSON.parse(localStorage.getItem("listItems"));
} else {
  listItems = [];
}
// localStorage.setItem("listItems", JSON.stringify(listItems));
const taskInput = document.querySelector("#taskToCreate");
createTaskButton.addEventListener("click", createTask);
refreshList();

function createTask(e) {
  e.preventDefault(); //stop from refreshing
  //   const newTask = document.createElement("li");
  newTask = `<li>${taskInput.value}</li>`;
  listItems.push(newTask);
  localStorage.setItem("listItems", JSON.stringify(listItems));
  taskInput.value = "";
  refreshList();
}

function refreshList() {
  taskListUL.innerHTML = "";
  for (let i = 0; i < listItems.length; i++) {
    taskListUL.innerHTML += listItems[i];
  }
  console.log("finished refresh");
}
