// Array
const arrNumber: Array<number> = [1, 2, 3, 4];
console.log(arrNumber);
const arrString: Array<string> = ["vietlt", "quyennc"]
console.log(arrString);
const arrArray: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]]
console.log(arrArray);

// Tuples

const Tuples: [string, string, number] = ["vietlt", "ba vi", 20];
// enum
enum ROLE { ADMIN, USER }

const rote = ROLE.ADMIN
console.log(rote);


enum STATUS_CODE { success = 200, client = 400, server = 500 };

const code = STATUS_CODE.success
console.log(code);



// function 
const showInfo = (name: string | number, age: number | string) => {
    if (typeof name == 'string') {
        console.log(name.toUpperCase());
    }
}

showInfo("Nguyen Cong Quyen", 20)


