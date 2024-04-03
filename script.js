document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskSpan.classList.add("completed");
            } else {
                taskSpan.classList.remove("completed");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
