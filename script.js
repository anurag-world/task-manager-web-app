let tasks = [];
let completed = false;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    displayTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function checkTask(index) {
  completed = !completed;
  const text = document.querySelector(".form-check-label");
  if (completed) text.setAttribute("style", "text-decoration: line-through");
  else text.removeAttribute("style");
  console.log(text, index);
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "form-check h-50");
    div.setAttribute("id", "task-list");
    div.innerHTML = `<input
      class="form-check-input shadow-sm"
      type="checkbox"
      value="${index}"
      id="flexCheckDefault"
      onclick="checkTask(${index})"
    />
    <label
      class="form-check-label"
      id="check-label"
      for="flexCheckDefault"
    >
    ${task}
    </label>
    <button
      onclick="deleteTask(${index})"
      class="btn btn-outline-danger shadow-sm px-3 py-1"
      role="button"
    >
      Delete
    </button>`;
    taskList.appendChild(div);
  });
}
