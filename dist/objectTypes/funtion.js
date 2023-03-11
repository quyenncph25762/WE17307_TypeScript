// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
// 2. Function return
var num3;
// function divide(): number {
//     return;
// }
// const showName = function(): string {
//     return;
// }
var func4 = function () {
    console.log("4");
};
var showError = function () {
    var err = new Error("Something went wrong!");
    throw err;
};
// 3. Function parameter
function divide(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
console.log(divide(10));
var showName = function () {
    return;
};
// 4. Rest parameter
function resparams(name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name, " ho\u0323c l\u01A1\u0301p ").concat(classes.join(","));
}
console.log(resparams("Qúy Lờ đờ", "TypeScript", "NodeJs"));
// 5. Callback
var arrNum = [1, 3, 5, 7, 9];
function we17307_map(numbers, callback) {
    var temp = [];
    for (var i = 0; i < numbers.length; i++) {
        var newNumber = callback(numbers[i]);
        temp.push(newNumber);
    }
    return temp;
}
var result = we17307_map(arrNum, function (item) {
    return item * item;
});
console.log(result);
