export default function createEmployeesObject(departmentName, employees) {
   let depObject = {};
   depObject[departmentName] = employees
   return depObject;
}