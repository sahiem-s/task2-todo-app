// (3) Add event listener to Add button
document.getElementById("addBtn").addEventListener("click", function () {
    
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    // Empty input check
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // (4) Creating list item dynamically
    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.textContent = taskText;

    // (5) Mark complete -> toggle class
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // (6) Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();  // (6) delete task
    });

    // Append to li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add li to list container
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
});
