class Store {
	static getTasks() {
		return fetch(" http://localhost:3000/tasks")
			.then((resp) => resp.json())
			.then((data) => data);
	}
}
