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

// task 1
  class Teacher {
    protected _firstName: string
    protected _lastName: string
    yearsOfExperience?: number
    fullTimeEmployee: boolean
    location: string
    [key: string]: any
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName
        this._lastName = lastName
        this.yearsOfExperience = undefined
        this.fullTimeEmployee = false
        this.location = ''
    }
  }
// Allow adding arbitrary attributes to the Teacher object:
// This can be achieved in TypeScript using dynamic property assignment

const teacher = new Teacher("John", "Doe")
teacher["contract"] = true
console.log(teacher.contract)
// task 2
class Directors extends Teacher {
    numberOfReports: number;
  
    constructor(firstName: string, lastName: string, numberOfReports: number) {
      super(firstName, lastName);
      this.numberOfReports = numberOfReports;
    }
  }
  
  const director1 = new Directors('John', 'Doe', 17);
  console.log(director1);
// task 3
  function printTeacher(firstName:string, lastName :string):string {
    const firstNamepart = firstName.charAt(0)
    return `${firstNamepart}. ${lastName}`
  }

// task 4
interface StudentConstructor{
    new (firstName: string, lastName: string):StudentClass
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(){
        return "Currently working";
    }

    displayName(){
        return this.firstName;
    }
}





