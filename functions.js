"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 5;
}
console.log(add(4));
//declaration part
function getupper(some) {
    return some.toUpperCase();
}
console.log(getupper("hello typescript"));
function getinfo(name, age, isadult) {
    return "name is : " + name + ", age is : " + age + " and is he adult : " + isadult;
}
console.log(getinfo("parv", 21, true));
function getinfo2(name, age, isadult) {
    if (isadult === void 0) { isadult = true; }
    return "name is : " + name + ", age is : " + age + " and is he adult : " + isadult;
}
console.log(getinfo2("parv", 21, false));
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    console.log("hero is ".concat(hero));
});
//return part
function getdata(name, num) {
    console.log(name + num);
}
getdata("parv", 6);
function getdata2(name) {
    return name.trim();
}
;
console.log(getdata2("   parv"));
//errors handle
function error(ermassage) {
    console.log(ermassage);
}
error("error 502");
function handleerror(ermassage) {
    throw new Error(ermassage);
}
handleerror("new error 445");
