interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'Favor',
    lastName: 'Maskoli',
    age: 20,
    location: 'Delta'
}

const student2: Student = {
    firstName: 'Ben',
    lastName: 'Oba',
    age: 26,
    location: 'Delta'
}


const studentsList: Student[] = [student1, student2]

// Create a function to render the table
function renderTable() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
  
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
    //   edditing
      const ageCell = document.createElement('td')
      const lastNameCell = document.createElement('td')
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
      ageCell.textContent = student.age.toString();
      lastNameCell.textContent = student.lastName;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      row.appendChild(ageCell)
      row.appendChild(lastNameCell)
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  // Call the renderTable function when the DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    renderTable();
  });