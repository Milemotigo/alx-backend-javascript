
// task 1
export  class Teacher {
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
export class Directors extends Teacher {
    numberOfReports: number;
  
    constructor(firstName: string, lastName: string, numberOfReports: number) {
      super(firstName, lastName);
      this.numberOfReports = numberOfReports;
    }
  }
  
  const director1 = new Directors('John', 'Doe', 17);
  console.log(director1);
// task 3
export function printTeacher(firstName:string, lastName :string):string {
    const firstNamepart = firstName.charAt(0)
    return `${firstNamepart}. ${lastName}`
  }

// task 4
export interface StudentConstructor{
    new (firstName: string, lastName: string):StudentClass
}

export interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentInterface {
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





