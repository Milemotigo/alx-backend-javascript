export default function getListStudentIds(idArr){
    if (!Array.isArray(idArr)){
        return [];
    }
    let ids = idArr.map(student => student.id);
    return ids;
}