export default function iterateThroughObject(reportWithIterator) {
    let employeeName = [];

    for (const employee of reportWithIterator) {
        employeeName.push(employee);
    }

    let names = employeeName.join('|');
    return names;
}