
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function() {
    console.log("Name: " + this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Subject: " + this.subject);
};

function Professor(name, subject, salary) {
    Faculty.call(this, name, subject);
    this.salary = salary;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function() {
    console.log("Salary: " + this.salary);
};

// Create object
const p1 = new Professor("Rahul", "Java", 50000);

// Access all methods
p1.showPerson();
p1.showFaculty();
p1.showProfessor();
