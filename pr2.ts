const array = ["cherry","banan","zenv","jyfb"]
array.join();
//console.log(array);
//console.log(array.join());
//console.log(array.sort());

const arrofnum = ["68","28","19","64","10000","245"]
//console.log(arrofnum.sort((a,b)=>{return(a>b?1:(a<b?-1:0))}));
array.join(",");
array.sort()
console.log(array.join());

console.log(arrofnum.sort(function comparenum(a,b){return(a>b?1:(a<b?-1:0))}));
console.log(arrofnum.sort());


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

var a = [...items].sort((a,b)=>{return(a.name>b.name?1:(a.name<b.name?-1:0))});
console.log(a);
var b = [...items].sort((a,b)=>{return(a.value - b.value)});
console.log(b);
console.log(items[0].name.split("").sort().join(""));

items[0].name = items[0].name.split("").sort().join("");