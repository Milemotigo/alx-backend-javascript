export default function createIteratorObject(report) {
    // prepare a list of departments to iterate through
    let departments = Object.keys(report.allEmployees);

    let currentDepartmentIdx = 0;
    let currentEmployeesIdx = 0;

    return {
        next: function() {
            if(currentDepartmentIdx < departments.length){
                const department = departments[currentDepartmentIdx];
                // get employee at the department
                const employees = report.allEmployees[department]

                if(currentEmployeesIdx < employees.length){
                    const employee = employees[currentEmployeesIdx];
                    currentEmployeesIdx++;
                    return {value: employee, done: false};
                }else{
                    currentDepartmentIdx++;
                    currentEmployeesIdx = 0;
                    return this.next()
                }
            }else{
                return {
                    done: true
                }
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}