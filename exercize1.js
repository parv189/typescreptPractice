var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var gender;
(function (gender) {
    gender["M"] = "Male";
    gender["F"] = "Female";
    gender["O"] = "Other";
})(gender || (gender = {}));
var grade;
(function (grade) {
    grade["A"] = ">90";
    grade["B"] = ">80";
    grade["C"] = ">70";
    grade["D"] = ">60";
    grade["E"] = ">50";
    grade["F"] = "<51";
})(grade || (grade = {}));
var employee = [
    { Name: "vishal", Gender: gender.M, City: "Ahmedabad", Salary: 60000, Grade: grade.A },
    { Name: "laxit", Gender: gender.M, City: "Surat", Salary: 40000, Grade: grade.B },
    { Name: "sanjana", Gender: gender.F, City: "Mumbai", Salary: 30000, Grade: grade.B },
    { Name: "mayank", Gender: gender.M, City: "Ahmedabad", Salary: 14000, Grade: grade.C },
    { Name: "mirali", Gender: gender.F, City: "Bengaluru", Salary: 6000, Grade: grade.F },
    { Name: "pankil", Gender: gender.M, City: "Chennai", Salary: 5000, Grade: grade.D },
];
var emp1 = __spreadArray([], employee, true).sort(function (a, b) { return (a.Name > b.Name ? 1 : (a.Name < b.Name ? -1 : 0)); });
var emp2 = __spreadArray([], employee, true).sort(function (a, b) { return (a.Salary - b.Salary); });
var emp3 = __spreadArray([], employee, true).sort(function (a, b) { return (a.Gender > b.Gender ? 1 : -1); });
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(employee.filter(function (value) { return value.Gender === gender.M && value.City === "Ahmedabad"; }));
console.log(employee.find(function (_a) {
    var Name = _a.Name;
    return Name === "vishal";
}));
// var searchByName = employee.map((fletter)=>{
//     for (let p of employee) {
//         for (let q = 0; q < p.Name.length; q++) {
//             if (p.Name[q] === fletter) {
//                 return p
//             }
//         }
//     }
// })
function searchByName(fletter, Gender, salary) {
    for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
        var p = employee_1[_i];
        for (var q = 0; q < p.Name.length; q++) {
            if ((p.Name[q] === fletter) && (p.Gender === Gender) && (p.Salary >= salary)) {
                console.log(p);
            }
        }
    }
    return "letter not Found in any Employee Name";
}
searchByName("k", gender.M, 10000);
// console.log(searchByName);
