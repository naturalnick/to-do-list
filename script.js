

document.getElementById("add-btn").addEventListener("click", function () {

  let newTask = document.getElementById("new-task-field").value;
  if (newTask != "") addNewTask(newTask);

  document.getElementById("new-task-field").value = "";
  document.getElementById("new-task-field").focus();

});

document.getElementById("new-task-field").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("add-btn").click();
  }
});

function addNewTask(taskTxt) {

  let html = `<li class="task"><input class="task-checkbox" type="checkbox"> ${taskTxt}<img class="x-img" src="images/remove.png"></li>`

  document.getElementById("task-list").insertAdjacentHTML("beforeend", html);

  let taskArray = document.getElementsByClassName("task");
  let checkboxArray = document.getElementsByClassName("task-checkbox");
  let xImgArray = document.getElementsByClassName("x-img");

  checkboxArray[taskArray.length - 1].addEventListener("change", function () {
    crossOut(this)
    hideDeleteButton(this)
  });

  xImgArray[taskArray.length - 1].addEventListener("click", function () {
    this.parentElement.remove();
  });
};

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