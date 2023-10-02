export default function getStudentIdsSum(stud) {
    const sum = stud.reduce((acc, student) => acc + student.id, 0);

    return sum;
}

// export default function getStudentIdsSum(stud) {
//     const sum = stud.map(student => student.id).reduce((acc, id) => acc + id);

//     return sum;
// }