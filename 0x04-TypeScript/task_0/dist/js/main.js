var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student1 = {
    firstName: 'Favor',
    lastName: 'Maskoli',
    age: 20,
    location: 'Delta'
};
var student2 = {
    firstName: 'Ben',
    lastName: 'Oba',
    age: 26,
    location: 'Delta'
};
var studentsList = [student1, student2];
// Create a function to render the table
function renderTable() {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var locationCell = document.createElement("td");
        //   edditing
        var ageCell = document.createElement('td');
        var lastNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        ageCell.textContent = student.age.toString();
        lastNameCell.textContent = student.lastName;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        row.appendChild(ageCell);
        row.appendChild(lastNameCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}
// Call the renderTable function when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    renderTable();
});
// task 1
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.yearsOfExperience = undefined;
        this.fullTimeEmployee = false;
        this.location = '';
    }
    return Teacher;
}());
// Allow adding arbitrary attributes to the Teacher object:
// This can be achieved in TypeScript using dynamic property assignment
var teacher = new Teacher("John", "Doe");
teacher["contract"] = true;
console.log(teacher.contract);
// task 2
var Directors = /** @class */ (function (_super) {
    __extends(Directors, _super);
    function Directors(firstName, lastName, numberOfReports) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.numberOfReports = numberOfReports;
        return _this;
    }
    return Directors;
}(Teacher));
var director1 = new Directors('John', 'Doe', 17);
console.log(director1);
// task 3
function printTeacher(firstName, lastName) {
    var firstNamepart = firstName.charAt(0);
    return "".concat(firstNamepart, ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
//# sourceMappingURL=main.js.map