// Get all tasks API
export async function getAllTasks() {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/all`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response) {
      throw new Error("Could not get all tasks");
    }

    const data = await response.json();
    // console.log(data);
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
    
        if (!response) {
          throw new Error("Could not create tasks");
        }
    
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        //TODO: handle error
        console.error(error.message);
      }
}
