export default function createReportObject(employeesList) {
    const allEmployees = {};

    for (const department in employeesList) {
        allEmployees[department] =  [...employeesList[department]];
    }

    return{
        allEmployees: allEmployees,
        getNumberOfDepartments: function() {
            return Object.keys(allEmployees).length;
        }
    }
}