function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	let marks = [];
	this.marks = marks;
}

new Student("Oleg", "male", 24);
new Student("Alexandra", "female", 21);
new Student("Anna", "female", 26);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marks)
	}
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	} else {
		let average = this.marks.reduce((acc, item) => acc + item, 0)
		return average / this.marks.length;
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;

	delete this.subject
	delete this.marks
}