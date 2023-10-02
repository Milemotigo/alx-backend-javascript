export default function getStudentsByLocation(students, city) {
    const studentDetails = students.filter(student => student.location === city);
    return studentDetails;
}