// Update Task Staus by Id API
async function updateStatus(taskId, newStatus) {
  console.log(newStatus);
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/status/${taskId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      }
    );

    if (!response.ok) {
      throw new Error("Could not update task status");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// Toggle
async function toggleStatus(id, currentStatus) {
  const completed = !currentStatus;
  await updateStatus(id, completed);
}
