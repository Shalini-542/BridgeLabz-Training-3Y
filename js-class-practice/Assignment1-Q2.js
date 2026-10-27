let name = "Shalini";
let age = 20;
let isStudent = true;
let subjects = ["Java", "HTML", "CSS"];
let student = { name: "Shalini", age: 20 };
let address = null;
let marks;

console.table([
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "Array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Marks", Value: marks, Type: typeof marks }
]);