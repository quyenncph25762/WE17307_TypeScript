// Array
var arrNumber = [1, 2, 3, 4];
var arrString = ["vietlt", "quyennc"];
var arrArray = [[1, 2, 3], [4, 5, 6]];
// Tuples
var Tuples = ["vietlt", "ba vi", 20];
// enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var rote = ROLE.ADMIN;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["success"] = 200] = "success";
    STATUS_CODE[STATUS_CODE["client"] = 400] = "client";
    STATUS_CODE[STATUS_CODE["server"] = 500] = "server";
})(STATUS_CODE || (STATUS_CODE = {}));
;
var code = STATUS_CODE.success;
// function 
var showInfo = function (name, age) {
    if (typeof name == 'string') {
        console.log(name.toUpperCase());
    }
};
showInfo("Nguyen Cong Quyen", 20);
