class Store {
	static getTasks() {
		// const url = "https://api.myjson.com/bins/7c40e";
		return fetch("https://api.myjson.com/bins/7c40e")
			.then((resp) => resp.json())
			.then((data) => {
				const tasks = data.tasks;
				return tasks;
			});
	}
}
