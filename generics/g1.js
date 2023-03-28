"use strict";
//take and return same value, which is define  in the type
function x(any) {
    return any;
}
const y = (any) => {
    return any[1];
};
var xoxo = { name: "fds", password: "wte" };
function a(val1, val2) {
    return {
        val1,
        val2
    };
}
class entry {
    constructor() {
        this.seating = [];
    }
    addobj(user) {
        this.seating.push(user);
        return this.seating;
    }
}
const u1 = new entry();
const a1 = u1.addobj({ name: 'parv', password: "ytrewd" });
console.log(a1);
