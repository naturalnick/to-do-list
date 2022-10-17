
document.getElementById("add-btn").addEventListener("click", addNewTask);

document.getElementById("new-task-field").addEventListener("keyup", function (event) {
  if (event.key === "Enter") document.getElementById("add-btn").click();
});

function addNewTask() {
  const newTask = document.getElementById("new-task-field").value;
  if (newTask != "") {
    addTaskHtml(newTask);
    addTaskEventListeners();
    clearNewTaskField();
  }
};

function addTaskHtml(task) {
  const inputHTML = '<input class="task-checkbox" type="checkbox">';
  const imgHTML = '<img class="x-img" src="images/remove.png">'
  const taskHTML = `<li class="task">${inputHTML} ${task}${imgHTML}</li>`

  document.getElementById("task-list").insertAdjacentHTML("beforeend", taskHTML);
}

function addTaskEventListeners() {
  const taskArray = document.getElementsByClassName("task");
  const checkboxArray = document.getElementsByClassName("task-checkbox");
  const xImgArray = document.getElementsByClassName("x-img");

  checkboxArray[taskArray.length - 1].addEventListener("change", function () {
    crossOut(this)
    hideDeleteButton(this)
  });

  xImgArray[taskArray.length - 1].addEventListener("click", function () {
    this.parentElement.remove();
  });
}

function crossOut(task) {
  const taskToCrossOut = task.parentElement;
  if (task.checked) {
    taskToCrossOut.classList.add("crossed-out");
  } else {
    taskToCrossOut.classList.remove("crossed-out");
  };
}

function hideDeleteButton(task) {
  if (task.checked) {
    task.parentElement.getElementsByTagName("img")[0].style.visibility = "visible";
  } else {
    task.parentElement.getElementsByTagName("img")[0].style.visibility = "hidden";
  };
}

function clearNewTaskField() {
  document.getElementById("new-task-field").value = "";
  document.getElementById("new-task-field").focus();
}