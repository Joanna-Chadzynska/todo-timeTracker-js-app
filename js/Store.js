class Store {
	static getTasks() {
		return fetch("http://localhost:3000/tasks")
			.then((resp) => resp.json())
			.then((data) => data);
	}

	static addTask(task) {
		return fetch("http://localhost:3000/tasks", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(task)
		})
			.then((resp) => resp.json())
			.then((data) => data)
			.catch((error) => new Error(error));
	}
}
