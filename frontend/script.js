import { getAllTasks, createTasks } from "./modules/apis.js";

let tasks = [];
let completed = false;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    createTasks(taskText);
    displayTasks();
    taskInput.value = "";
  }
}
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function clearAllTasks() {
  tasks.length = 0;
  displayTasks();
}

function checkTask(index) {
  completed = !completed;
  const text = document.querySelector(".form-check-label");
  if (completed) text.setAttribute("style", "text-decoration: line-through");
  else text.removeAttribute("style");
  console.log(text, index);
}

async function displayTasks() {
  const tasksArr = await getAllTasks();

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const clearTasks = document.getElementById("clearTasks");

  if (tasksArr.length > 0) {
    clearTasks.innerHTML = `<button class="btn btn-warning" type="button" onclick="clearAllTasks()">
      Clear All Tasks
    </button>`;
  } else {
    clearTasks.innerHTML = "";
  }

  tasksArr.forEach((taskObj, index) => {
    const div = document.createElement("div");
    div.setAttribute(
      "class",
      "form-check border border-2 border-info bg-info-subtle p-2 mb-2 rounded"
    );
    div.setAttribute("id", "task-list");
    div.innerHTML = `<div id="task-list-form">
    <input
      class="form-check-input shadow-sm"
      type="checkbox"
      value="${index}"
      id="flexCheckDefault"
      onclick="checkTask(${index})"
    />
    <label
      class="form-check-label text-wrap"
      id="check-label"
      for="flexCheckDefault"
    >
    ${taskObj.task}
    </label>
    </div>

    <button
      onclick="deleteTask(${index})"
      class="btn btn-close shadow-sm px-2 py-1"
      aria-label="Close"
    />`;
    taskList.appendChild(div);
  });
}
displayTasks();
