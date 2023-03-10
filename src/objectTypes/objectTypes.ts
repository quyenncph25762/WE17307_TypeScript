// Array
const arrNumber: Array<number> = [1, 2, 3, 4];
const arrString: Array<string> = ["vietlt", "quyennc"]
const arrArray: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]]
// Tuples

const Tuples: [string, string, number] = ["vietlt", "ba vi", 20];
// enum
enum ROLE { ADMIN, USER }

const rote: ROLE = ROLE.ADMIN

enum STATUS_CODE { success = 200, client = 400, server = 500 };

const code: STATUS_CODE = STATUS_CODE.success


// function 
const showInfo = (name: string | number, age: number | string) => {
    if (typeof name == 'string') {
        console.log(name.toUpperCase());
    }
}

showInfo("Nguyen Cong Quyen", 20)


