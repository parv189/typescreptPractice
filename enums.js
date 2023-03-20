var seatAllotment;
(function (seatAllotment) {
    seatAllotment[seatAllotment["Asile"] = 10] = "Asile";
    seatAllotment["Middle"] = "Middle";
    seatAllotment["Window"] = "window";
    seatAllotment[seatAllotment["window2"] = 40] = "window2";
})(seatAllotment || (seatAllotment = {}));
var myseat = seatAllotment.window2;
console.log(myseat);
