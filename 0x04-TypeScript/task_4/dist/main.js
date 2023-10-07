export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
export var cTeacher = {
    firstName: 'Julien',
    lastName: 'alx',
    experienceTeachingC: 10
};
if (cpp) {
    console.log("C++");
    cpp.setTeacher = cTeacher;
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
}
if (java) {
    console.log("Java");
    cpp.setTeacher = cTeacher;
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
}
if (react) {
    console.log("React");
    cpp.setTeacher = cTeacher;
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
//# sourceMappingURL=main.js.map