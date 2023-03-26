"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "parv",
    num: 10,
    isactive: true
};
function info(_a) {
    var string = _a.name, number = _a.num, boolean = _a.isactive;
    return { name: "parv", num: 5, isactive: true };
}
console.log(info({ name: "x", num: 5, isactive: false }));
function data(user) {
    return { name: "", num: 5, isactive: false };
}
console.log({ name: "parv", num: 3, isactive: true });
var user1 = {
    _id: 10001,
    name: "shukesh",
    num: 345,
    email: "sk567@kmail.dev",
};
var user2 = {
    _id: 10001,
    name: "shukesh",
    num: 345,
    email: "sk567@kmail.dev",
    isactive: true
};
console.log(user2);
