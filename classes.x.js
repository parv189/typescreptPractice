var band = /** @class */ (function () {
    function band(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    band.prototype.play = function (action) {
        return "".concat(this.name, " ").concat(action, " the ").concat(this.instrument);
    };
    return band;
}());
var a = new band("Raju", "guitar");
//console.log(a.play("strums"));
var array = [];
var info = /** @class */ (function () {
    //array:{Name:string,Email:string}[]
    function info(name, age, email, mobile) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.mobile = mobile;
    }
    info.prototype.calling = function () {
        if (this.age > 30) {
            console.log("you have called", this.name);
            return this.store();
        }
        else {
            return "Enter Valid Number";
        }
    };
    info.prototype.store = function () {
        //console.log("your Stored data: ");
        array.push({ Name: this.name, Age: this.age, Email: this.email, Mobile: this.mobile });
    };
    return info;
}());
var arr = [
    new info("Parv", 90, "abc@3.com", 123456787),
    new info("Parv", 34, "abc@3.com", 123456787),
    new info("Parv", 2, "abc@3.com", 123456787),
    new info("Parv", 22, "abc@3.com", 123456787),
    new info("Parv", 54, "abc@3.com", 123456787),
    new info("Parv", 22, "abc@3.com", 123456787),
    new info("Parv", 11, "abc@3.com", 123456787),
    new info("Parv", 7, "abc@3.com", 123456787),
    new info("Parv", 45, "abc@3.com", 123456787),
    new info("4t34te", 30, "abc@3.com", 123456787)
];
for (var i = 0; i < arr.length; i++) {
    arr[i].calling();
}
console.log(array);
