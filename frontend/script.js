import {
  getAllTasks,
  createTasks,
  deleteTasks,
  updateTasks,
  deleteAllTasks,
} from "./modules/apis.js";

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

const editButton = document.getElementById("edit-button");
const btnClose = document.getElementById("btn-close");

async function onUpdate(id) {
  const editTaskInput = document.getElementById("editTaskInput");
  const editValue = editTaskInput.value.trim();

  if (editValue !== "") {
    await updateTasks(id, editValue);
    displayTasks();
    btnClose.click();
  }
}

async function editTaskArea(id, task) {
  const editTaskInput = document.getElementById("editTaskInput");
  editTaskInput.value = task;
  editButton.onclick = () => onUpdate(id);
}

// Clear Task List
function clearAllTasks() {
  deleteAllTasks();
  displayTasks();
}

const clearTasks = document.getElementById("clearTasks");
clearTasks.addEventListener("click", () => clearAllTasks());

async function displayTasks() {
  const tasksArr = await getAllTasks();

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // Show clear task button if task list is not empty
  if (tasksArr.length > 0) {
    clearTasks.innerHTML = `<button class="btn btn-warning" type="button">
      Clear All Tasks
    </button>`;
  } else {
    clearTasks.innerHTML = "";
  }

  tasksArr.forEach((taskObj) => {
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
      value="${taskObj._id}"
      id="flexCheckDefault"
      ${taskObj.completed ? "checked" : ""}
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
    editButton.setAttribute("type", "button");
    editButton.setAttribute("class", "btn btn-success shadow-sm ms-2 mb-2");
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#editModal");
    editButton.onclick = () => editTaskArea(taskObj._id, taskObj.task);
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
