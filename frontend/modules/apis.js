// Get all tasks API
export async function getAllTasks() {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/all`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Could not get all tasks");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    //TODO: handle error
    console.error(error.message);
  }
}

// Create Tasks API
export async function createTasks(task) {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    if (!response.ok) {
      throw new Error("Could not create task");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    //TODO: handle error
    console.error(error.message);
  }
}

// Update Task by Id API
export async function updateTasks(taskId, updatedTaskText) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/update/${taskId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ task: updatedTaskText }),
      }
    );

    if (!response.ok) {
      throw new Error("Could not delete task");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    //TODO: handle error
    console.error(error.message);
  }
}

// Delete Tasks by Id API
export async function deleteTasks(taskId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/delete/${taskId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Could not delete task");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    //TODO: handle error
    console.error(error.message);
  }
}
