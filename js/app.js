document.addEventListener("DOMContentLoaded", DomElements.displayTasks);

const addTaskForm = document.getElementById("task-form");
const title = document.getElementById("task-title");
const description = document.getElementById("task-description");

const addTask = (e) => {
	e.preventDefault();

	const title = document.getElementById("task-title").value;
	const description = document.getElementById("task-description").value;

	if (!title || !description)
		return DomElements.showAlert("Please fill in all fields!", "danger");
	const task = new Task(title, description);

	// tasks.addTasks(task);
	Store.setTasks(task);
	DomElements.addTaskToList(task);
	DomElements.showAlert("Task added!", "success");
	DomElements.clearFields();
};

addTaskForm.addEventListener("submit", addTask);

const finishTask = (e) => {
	e.preventDefault();
	DomElements.finishTask(e.target);
};

const addOpp = (e) => {
	e.preventDefault();
	console.log(e.target);
	// const description = document.querySelector("#operation-description").value;
	// if (!description) return;
	// console.log(description);
	// const operation = new Operation(description);
	// tasks.tasks.forEach((task) => task.addOperation(operation));
	// document.querySelector("#operation-description").value = "";
	// console.log(tasks);
};

document
	.getElementById("tasks-list")
	.addEventListener("click", finishTask, false);
