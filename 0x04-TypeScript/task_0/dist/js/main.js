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
//# sourceMappingURL=main.js.map