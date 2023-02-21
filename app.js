/**
 * [1] Use sweet alert if input is empty
 * [2] Check if tasks exist
 * [3] create delete all tasks button
 * [4] create finish all tasks button
 * [5] add to tasks to local storage
 * === soon ===
 */

// Setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".completed-tasks span");

// Focus on input field
window.onload = () => {
  theInput.focus();
  createNoTasks();
};

// Adding the task
theAddButton.onclick = () => {
  // If input is empty
  if (theInput.value === "") {
    console.log("No value");
  } else {
    let noTaskMessage = document.querySelector(".no-tasks-message");
    // check if span with no task message is exist
    if (document.body.contains(noTaskMessage)) {
      noTaskMessage.remove();
    }
    // create main span element
    let mainSpan = document.createElement("span");
    // create delete button
    let deleteButton = document.createElement("span");
    // create the main span text
    let text = document.createTextNode(theInput.value);
    // create the delete button text
    let deleteBtnText = document.createTextNode("Delete");
    // add text to main span
    mainSpan.appendChild(text);
    mainSpan.className = "task-box";
    // add text to delete button
    deleteButton.appendChild(deleteBtnText);
    deleteButton.className = "delete";
    // add delete button to main span
    mainSpan.appendChild(deleteButton);
    // add the task to the container
    tasksContainer.appendChild(mainSpan);
    theInput.value = "";
    theInput.focus();

    calculateTasks();
  }
};

document.addEventListener("click", (e) => {
  // delete the task
  if (e.target.className === "delete") {
    e.target.parentNode.remove();

    // check number of tasks in the container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }

    calculateTasks();
  }

  // finish task
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    calculateTasks();
  }
});

// Function to create no tasks message
function createNoTasks() {
  // create message span element
  let msgSpan = document.createElement("span");
  // create the text message
  let msgText = document.createTextNode("No Tasks To Show");
  msgSpan.appendChild(msgText);
  msgSpan.className = "no-tasks-message";
  tasksContainer.appendChild(msgSpan);
}

// function to calculate tasks
function calculateTasks() {
  // calculate all tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  // calculate completed tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
