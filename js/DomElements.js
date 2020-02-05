class DomElements {
	static displayTasks() {
		Store.getTasks().then((tasks) =>
			tasks.forEach((task) => DomElements.addTaskToList(task))
		);
	}

	static addTaskToList(task) {
		const list = document.getElementById("tasks-list");
		const section = document.createElement("section");
		const ul = document.createElement("ul");
		const liTaskBtns = document.createElement("li");
		const taskOperationsList = document.createElement("ul");
		taskOperationsList.className = "list-group operation";

		// Add operation form shown
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

		const operationItem = task.operations.map((operation) => {
			return `
			<li class="list-group-item task-operation">
					${operation.description}
					<a href="" class="btn btn-primary float-right">Stop timer</a>
					<span class="btn btn-warning float-right">Czas: 1h 23m ${operation.timeSpent}</span>
			</li>
			`;
		});

		taskOperationsList.innerHTML = task.operations.length > 0 && operationItem;
		// section
		section.className = "task";
		section.dataset.key = `${task.id}`;
		section.innerHTML = `
            <h2>${task.title}</h2>
		`;

		// list group
		ul.className = `list-group todo`;

		// list group first element
		liTaskBtns.className = `list-group-item list-group-item-action active task-description"`;
		liTaskBtns.innerHTML = `
		${task.description}
		<a href="" class="btn btn-secondary float-right finish" id='finish-task'>Finish</a>
		<a href="" class="btn btn-secondary float-right add-form"
			>Add operation</a
		>
		`;

		const showOperationForm = (e) => {
			if (addOperationForm.style.display === "none") {
				addOperationForm.style.display = "block";
			} else {
				addOperationForm.style.display = "none";
			}

			ul.appendChild(addOperationForm);
		};

		const formAddOperation = addOperationForm.querySelector("form");
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
		liTaskBtns
			.querySelector(".add-form")
			.addEventListener("click", showOperationForm);

		ul.appendChild(liTaskBtns);

		section.appendChild(ul);
		section.appendChild(taskOperationsList);
		list.appendChild(section);
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
