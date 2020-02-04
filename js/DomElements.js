class DomElements {
	static displayTasks() {
		Store.getTasks().then((tasks) =>
			tasks.forEach((task) => DomElements.addTaskToList(task))
		);
	}

	static addTaskToList(task) {
		const list = document.getElementById("tasks-list");

		// task.operations.forEach((operation) => DomElements.addOperation(operation));
		const section = document.createElement("section");
		section.className = "task";
		section.innerHTML = `
            <h2>${task.title}</h2>
						<ul class="list-group todo">
							<li class="list-group-item active task-description">
								${task.description}
								<a href="" class="btn btn-secondary float-right finish" id='finish-task'>Finish</a>
								<a href="" class="btn btn-secondary float-right"
									>Add operation</a
								>
              </li>
              <li class="list-group-item task-operation">
                <form class="form-group" class="new-task">
                  <input
                  type="text"
                  class="form-control"
                  name="description"
                  placeholder="Operation description"
                  />
                  <input type="submit" value="Add" class="btn btn-primary" />
                </form>
              </li>
      
            </ul>
            
            <hr/>
    `;

		list.appendChild(section);
	}

	static finishTask(el) {
		if (el.classList.contains("finish")) {
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
