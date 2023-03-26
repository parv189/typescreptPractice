var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var array = ["cherry", "banan", "zenv", "jyfb"];
array.join();
//console.log(array);
//console.log(array.join());
//console.log(array.sort());
var arrofnum = ["68", "28", "19", "64", "10000", "245"];
//console.log(arrofnum.sort((a,b)=>{return(a>b?1:(a<b?-1:0))}));
array.join(",");
array.sort();
console.log(array.join());
console.log(arrofnum.sort(function comparenum(a, b) { return (a > b ? 1 : (a < b ? -1 : 0)); }));
console.log(arrofnum.sort());
var items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];
var a = __spreadArray([], items, true).sort(function (a, b) { return (a.name > b.name ? 1 : (a.name < b.name ? -1 : 0)); });
console.log(a);
var b = __spreadArray([], items, true).sort(function (a, b) { return (a.value - b.value); });
console.log(b);
console.log(items[0].name.split("").sort().join(""));
items[0].name = items[0].name.split("").sort().join("");
