type emp = {
    Name: string;
    Gender: gender;
    City: string;
    Salary: number;
    Grade: grade
}

enum gender {
    M = "Male",
    F = "Female",
    O = "Other"
}
enum grade {
    A = ">90",
    B = ">80",
    C = ">70",
    D = ">60",
    E = ">50",
    F = "<51",
}

var employee: emp[] = [
    { Name: "vishal", Gender: gender.M, City: "Ahmedabad", Salary: 60000, Grade: grade.A },
    { Name: "laxit", Gender: gender.M, City: "Surat", Salary: 40000, Grade: grade.B },
    { Name: "sanjana", Gender: gender.F, City: "Mumbai", Salary: 30000, Grade: grade.B },
    { Name: "mayank", Gender: gender.M, City: "Ahmedabad", Salary: 14000, Grade: grade.C },
    { Name: "mirali", Gender: gender.F, City: "Bengaluru", Salary: 6000, Grade: grade.F },
    { Name: "pankil", Gender: gender.M, City: "Chennai", Salary: 5000, Grade: grade.D },
]

var emp1 = [...employee].sort((a,b)=>{return(a.Name>b.Name?1:(a.Name<b.Name?-1:0))})
var emp2 = [...employee].sort((a,b)=>{return(a.Salary - b.Salary)})
var emp3 = [...employee].sort((a,b)=>{return(a.Gender>b.Gender?1:-1)})

console.log(emp1)
console.log(emp2)
console.log(emp3);
console.log(employee.filter((value)=>{return value.Gender === gender.M && value.City === "Ahmedabad"}));

console.log(employee.find(({Name}) => Name === "vishal"))

// var searchByName = employee.map((fletter)=>{
//     for (let p of employee) {
//         for (let q = 0; q < p.Name.length; q++) {
//             if (p.Name[q] === fletter) {
//                 return p
//             }
//         }
//     }

// })
function searchByName(fletter:string,Gender:gender,salary:number){
for(let p of employee){
    for(let q=0 ; q<p.Name.length ; q++){
        if((p.Name[q] === fletter) && (p.Gender === Gender) && (p.Salary >= salary)){
            console.log(p);
        }
    }
}
return"letter not Found in any Employee Name"
}
searchByName("k",gender.M,10000);
// console.log(searchByName);

