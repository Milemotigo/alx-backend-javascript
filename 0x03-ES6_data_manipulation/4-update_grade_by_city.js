export default function updateStudentGradeByCity(students, city, newGrade) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const matchingGrade = newGrade.find(grade => grade.studentId === students.id);
            return {
                ...student,
                grade: matchingGrade ? matchingGrade.grade : 'N/A'
            };
        });
}