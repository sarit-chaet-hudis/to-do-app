// window.addEventListener("DOMContentLoaded", init);
// function init() {
//   localStorage.setItem("taskList", {});
const createTaskButton = document.querySelector(".createTaskButton");
const taskList = document.querySelector(".taskList");
console.log(taskList);
createTaskButton.addEventListener("click", createTask);

function createTask(e) {
  e.preventDefault();
  const taskInput = document.querySelector("#taskToCreate");
  const newTask = `<li>${taskInput.value}</li>`;
  taskInput.value = "";
  taskList.innerHTML = newTask;

  //   localStorage.taskList.setItem("1", newTaskInput);
  //   console.log(localStorage.getItem("taskList"));
}
