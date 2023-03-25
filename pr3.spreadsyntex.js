var arr = [2, 6, 4];
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum.apply(void 0, arr));
