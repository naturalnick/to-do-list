document.getElementById("add-btn").addEventListener("click", function() {

  var newTask = document.getElementById("new-task-field").value;

  if (newTask != "") {
    var html = `<li class="task"><input class="task-checkbox" type="checkbox"> ${newTask}<img class="x-img" src="images/remove.png"></li>`

    document.getElementById("task-list").insertAdjacentHTML("beforeend", html);

    addNewTaskEventListeners(document.getElementsByClassName("task"));
  };

});

function addNewTaskEventListeners(taskArray) {
  var currentTask = taskArray[taskArray.length - 1];
  var checkboxArray = document.getElementsByClassName("task-checkbox");
  var xArray = document.getElementsByClassName("x-img");

  checkboxArray[taskArray.length - 1].addEventListener("change", function() {
    console.log(this)
    if (this.checked) {
      this.parentNode.classList.add("crossed-out");
      //this part is broken. TODO later
      xArray[taskArray.length - 1].style.visibility = "visible";
    } else {
      this.parentNode.classList.remove("crossed-out");
      xArray[taskArray.length - 1].style.visibility = "hidden";
    };
  });

  xArray[taskArray.length - 1].addEventListener("click", function() {
    this.parentNode.removeChild(currentTask);
  });
};
