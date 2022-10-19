
document.getElementById("add-btn").addEventListener("click", addNewTask);

document.getElementById("new-task-field").addEventListener("keyup", function (event) {
  if (event.key === "Enter") document.getElementById("add-btn").click();
});

function addNewTask() {
  const newTask = document.getElementById("new-task-field").value;
  if (newTask != "") {
    addTaskHtml(newTask);
    clearTaskField();
  }
};

function addTaskHtml(taskText) {
  const node = document.createElement("li");
  node.classList.add("task");

  const checkbox = document.createElement("input");
  checkbox.classList.add("task-checkbox");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", crossOut);

  const text = document.createTextNode(taskText);

  const deleteButton = document.createElement("img");
  deleteButton.classList.add("x-img");
  deleteButton.src = "images/remove.png";
  deleteButton.addEventListener("click", removeTask);
  
  node.append(checkbox, text, deleteButton);
  document.getElementById("task-list").append(node);
}

function removeTask() {
  this.parentElement.remove();
}

function crossOut() {
  this.parentElement.classList.toggle("crossed-out");
}

function clearTaskField() {
  document.getElementById("new-task-field").value = "";
  document.getElementById("new-task-field").focus();
}