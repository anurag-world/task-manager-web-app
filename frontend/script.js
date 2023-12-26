import { getAllTasks, createTasks, deleteTasks } from "./modules/apis.js";

let completed = false;

// Create tasks
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

// Delete tasks
function deleteTask(id) {
  if (id !== undefined) deleteTasks(id);
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
    </div>`;

    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", "taskContainer");

    // Create Edit button
    const editButton = document.createElement("Button");
    editButton.setAttribute("class", "btn btn-success shadow-sm ms-2 mb-2");
    editButton.setAttribute("id", "edit-button");
    editButton.onclick = () => {};
    editButton.innerText = "Edit";

    // Create Delete Button
    const Button = document.createElement("Button");
    Button.setAttribute("class", "btn btn-danger shadow-sm ms-2 mb-2");
    Button.onclick = () => deleteTask(taskObj._id);
    Button.innerText = "Delete";

    taskContainer.appendChild(div);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(Button);
    taskList.appendChild(taskContainer);
  });
}
displayTasks();
