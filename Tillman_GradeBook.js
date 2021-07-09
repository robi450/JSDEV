//Tillman GradeBook
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
}

Student.prototype.calculateGrade = function () {
    var total = this.grades.reduce(function(total, grade) {
        return total + grade;
    },0);
    return total / this.grades.length;
}

function GradeBook() {
    this.students = [];
}

GradeBook.prototype.addStudent = function (student) {
    this.students.push(student);
}

GradeBook.prototype.calculateClassAverage = function () {
    var total = 0;
    for (var i = 0, j = this.students.length; i < j; i++) {
        var studentAverage = this.students[i].calculateGrade();
        total += studentAverage;
    }
    return total / this.students.length;
}

var me  = new Student('Roberto', 'Torres');
var another = new Student('Josef Martinez');

me.addGrade(80);
me.addGrade(90);

another.addGrade(100);
another.addGrade(100);

var gb = new GradeBook();
gb.addStudent(me);
gb.addStudent(another);

console.log("Class Average: " + gb.calculateClassAverage());