export default function getListStudents(){
    const studentsInfo = []
    let student1 = { id: 1, firstName: "Guillaume", location: "San Francisco" }
    let student2 = { id: 2, firstName: "James", location: "Columbia" }
    let student5 = { id: 5, firstName: "Serena", location: "San Francisco" }
    studentsInfo.push(student1, student2, student5)
    return studentsInfo
}