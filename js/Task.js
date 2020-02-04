class Task {
	constructor(title, description, status = "open", operations = []) {
		this.title = title;
		this.description = description;
		this.status = status;
		this.operations = operations;
	}
}
