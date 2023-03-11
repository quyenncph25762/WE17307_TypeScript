// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function () {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}

// 2. Function return
let num3: number;
// function divide(): number {
//     return;
// }

// const showName = function(): string {
//     return;
// }

const func4 = function (): void {
    console.log("4");
}

const showError = function (): never {
    const err = new Error("Something went wrong!")
    throw err;
}

// 3. Function parameter
function divide(a: number, b: number = 1): number {
    return a / b;
}

console.log(divide(10,));


const showName = function (): string {
    return;
}

// 4. Rest parameter

function resparams(name: string, ...classes: string[]): string {
    return `Sinh viên ${name} học lớp ${classes.join(",")}`
}
console.log(resparams("Qúy Lờ đờ", "TypeScript", "NodeJs"));

// 5. Callback

const arrNum = [1, 3, 5, 7, 9];

function we17307_map(numbers: number[], callback?: (item: number) => number): number[] {
    const temp = []
    for (let i = 0; i < numbers.length; i++) {
        const newNumber = callback(numbers[i]);
        temp.push(newNumber)
    }
    return temp
}

const result = we17307_map(arrNum, (item) => {
    return item * item
})

console.log(result);
