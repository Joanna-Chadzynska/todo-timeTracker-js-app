class DomElements {
	static displayTasks() {
		Store.getTasks().then((tasks) =>
			tasks.forEach((task) => DomElements.addTaskToList(task))
		);
	}

	// SECTION TASK
	static addSection(task) {
		const section = document.createElement("section");
		section.className = "task";
		section.dataset.key = `${task.id}`;
		section.innerHTML = `
            <h2>${task.title}</h2>
		`;
		section.appendChild(DomElements.listGroupTodo(task));
		section.appendChild(DomElements.operationsList(task));
		return section;
	}

	static listGroupTodo(task) {
		const ul = document.createElement("ul");

		ul.className = `list-group todo`;
		ul.appendChild(DomElements.mainTaskBtns(task));
		// ul.appendChild(DomElements.addOperationForm());
		return ul;
	}

	static mainTaskBtns(task) {
		const liTaskBtns = document.createElement("li");
		const btnAddForm = document.createElement("a");
		btnAddForm.className = "btn btn-secondary float-right toggle-form";
		btnAddForm.dataset.key = `${task.id}`;
		btnAddForm.innerText = "Add operation";
		liTaskBtns.className = `list-group-item list-group-item-action active task-description"`;
		liTaskBtns.innerHTML = `
		${task.description}
		<a href="" class="btn btn-secondary float-right finish" id='finish-task'>Finish</a>
		`;

		liTaskBtns.appendChild(btnAddForm);

		const toggleForm = (e) => {
			let key = Number(e.target.dataset.key);

			if (DomElements.addOperationForm().style.display === "none") {
				DomElements.addOperationForm().style.display = "block";
			} else {
				DomElements.addOperationForm().style.display = "none";
			}

			DomElements.listGroupTodo(task).appendChild(
				DomElements.addOperationForm()
			);
		};

		btnAddForm.addEventListener("click", toggleForm);

		return liTaskBtns;
	}

	static addOperationForm() {
		const addOperationForm = document.createElement("li");
		addOperationForm.style.display = "none";
		addOperationForm.className = `list-group-item task-operation`;
		addOperationForm.innerHTML = `
		<form class="form-group new-task-operation" id='new-task-operation'>
			<input
			type="text" 
			class="form-control"
			name="description"
			id="operation-description"
			placeholder="Operation description"
			/>
		<input type="submit" value="Add operation" class="btn btn-primary submit-operation" />
	</form>
		`;
		return addOperationForm;
	}

	static operationsList(task) {
		const operationsList = document.createElement("ul");
		operationsList.className = "list-group operation";
		const operationItem = task.operations.map((operation) => {
			if (operation.timeSpent === 0) {
				return `
			<li class="list-group-item task-operation">
					${operation.description}
					<span class="badge badge-primary badge-pill">Time: ${DomElements.convertTime(
						operation.timeSpent
					)}</span>
					<a href="" class="btn btn-primary float-right start-stop-timer">Start timer</a>
					<a href="" class="btn btn-primary float-right start-timer"
						>Add time manually</a
					>
			</li>
			`;
			} else {
				return `
				<li class="list-group-item task-operation">
				${operation.description}
					<a href="" class="btn btn-primary float-right start-stop-timer">Stop timer</a>
					<span class="btn btn-warning float-right">Time: ${DomElements.convertTime(
						operation.timeSpent
					)}</span>
				</li>
				`;
			}
		});
		operationsList.innerHTML =
			task.operations.length > 0 ? operationItem : null;

		// DomElements.timer(2000);

		return operationsList;
	}

	static addTaskToList(task) {
		const list = document.getElementById("tasks-list");
		// const btnTime = taskOperationsList.querySelector(".start-stop-timer");
		// console.log(btnTime);
		// const btnReset = document.querySelector(".reset-timer");
		// btnTime.addEventListener("click", DomElements.timer);

		// const showOperationForm = (e) => {
		// 	if (addOperationForm.style.display === "none") {
		// 		addOperationForm.style.display = "block";
		// 	} else {
		// 		addOperationForm.style.display = "none";
		// 	}

		// 	DomElements.listGroupTodo(task).appendChild(addOperationForm);
		// };

		const formAddOperation = DomElements.addOperationForm().querySelector(
			"form"
		);
		formAddOperation.addEventListener("click", (e) => {
			e.preventDefault();
			// Use document.createEvent to initiate submit
			const domEvent = document.createEvent("Event");
			domEvent.initEvent("submit", false, true);
			e.target.closest("form").dispatchEvent(domEvent);
			e.preventDefault();
			const sectionKey =
				e.target.parentElement.parentElement.parentElement.parentElement;
			const taskID = task.id;
			const description = addOperationForm.querySelector(".form-control").value;
			const operation = new Operation(description);
			let operations = task.operations;

			console.log(operations);
			// Store.updateTasksOperations(task.id, operation);
		});

		list.appendChild(DomElements.addSection(task));
	}

	static displayOperations() {}

	static finishTask(el) {
		const elements = [...el.parentElement.parentElement.parentElement.children];
		if (el.classList.contains("finish")) {
			el.parentElement.style.textDecoration = "line-through";
			el.parentElement.classList.add("list-group-item-success");
			elements[2].remove();
			el.nextElementSibling.remove();
			el.remove();
		}
	}

	static timer(seconds) {
		let time;
		let active = false;
		let interval;
		const start = () => {
			time++;
			console.log(DomElements.convertTime(time));
		};
		if (seconds > 0) {
			time = seconds;
		} else {
			time = 0;
		}
		if (!active) {
			active = !active;
			interval = setInterval(start, 1000);
		} else {
			active = !active;
			clearInterval(interval);
		}
	}

	static convertTime(given_seconds) {
		const dateObj = new Date(given_seconds * 1000);
		const hours = dateObj.getUTCHours();
		const minutes = dateObj.getUTCMinutes();
		const seconds = dateObj.getSeconds();

		const timeString = `${hours.toLocaleString()}h ${minutes.toLocaleString()}m ${seconds.toLocaleString()}s`;
		return timeString;
	}

	static showAlert(message, className) {
		const div = document.createElement("div");
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));

		const container = document.getElementById("task-form-container");
		const form = document.getElementById("task-form");

		container.insertBefore(div, form);

		setTimeout(() => document.querySelector(".alert").remove(), 2000);
	}

	static clearFields() {
		document.getElementById("task-title").value = "";
		document.getElementById("task-description").value = "";
	}
}
