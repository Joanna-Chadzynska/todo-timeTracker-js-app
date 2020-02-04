document.addEventListener("DOMContentLoaded", DomElements.displayTasks);

const addTask = (e) => {
	e.preventDefault();
	const title = document.getElementById("task-title").value;
	const description = document.getElementById("task-description").value;

	if (!title || !description)
		return DomElements.showAlert("Please fill in all fields!", "danger");
	const task = new Task(title, description);

	DomElements.addTaskToList(task);
	DomElements.showAlert("Task added!", "success");
	DomElements.clearFields();
};

document.getElementById("task-form").addEventListener("submit", addTask);

const finishTask = document.getElementById("tasks-list");

finishTask.addEventListener("click", (e) => {
	e.preventDefault();
	DomElements.finishTask(e.target);
});
