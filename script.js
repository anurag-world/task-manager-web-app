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
    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}
