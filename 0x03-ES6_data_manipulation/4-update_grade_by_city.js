export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
            let gradeValue = matchingGrade ? matchingGrade.grade : 'N/A'
            return {
                id: student.id,
                firstName: student.firstName,
                location: student.location,
                grade:gradeValue
            };
        });
}