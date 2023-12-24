let tasks = [];

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

function displayTasks() {
  const taskList = document.getElementById("taskList");
  console.log(taskList);
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value="${index}"
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      ${task}
    </label>
    <button onclick="deleteTask(${index})" class="deleteBtn" role="button">
      Delete
    </button>
  </div>`;
    taskList.appendChild(li);
  });
}
