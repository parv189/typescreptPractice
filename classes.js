var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name, city, count) {
        if (city === void 0) { city = "ahmedabad"; }
        if (count === void 0) { count = 1; }
        this.email = email;
        this.name = name;
        this.city = city;
        this.count = count;
    }
    User.prototype.deletetockn = function () {
        console.log("tocken has been deleted");
    };
    Object.defineProperty(User.prototype, "getappleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courcecount", {
        get: function () {
            return this.count;
        },
        set: function (coursenum) {
            if (coursenum < 1) {
                throw new Error("course count should more then 1");
            }
            this.count = coursenum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this.count = 4;
    };
    return SubUser;
}(User));
var parv = new User("p@p.com", "parv");
parv.name;
