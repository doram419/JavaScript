// 연습 문제 1.
// 2단 ~ 9단까지 구구단표 출력
// - for 버전
// console.log("==== for 버전 ====")
// for(let num1 = 2; num1 <= 9; num1++){
//     for(let num2 = 2; num2 <= 9; num2++){
//         console.log(num1 + " * " + num2 + " = " + (num1*num2));
//     }
//     console.log("=============");
// }

// - while 버전
// console.log("==== while 버전 ====")
// let num1, num2;
// num1 = 2;
// while(num1 <= 9) {
//     num2 = 2;
//     while(num2 <= 9) {
//         console.log(num1 + " * " + num2 + " = " + (num1*num2));
//         num2++;
//     }
//     console.log("=============");
//     num1++;
// }

// 연습 문제 2.

// *****
// ****
// ***
// **
// *

// - for 버전
// let starPrint;
// for (let row = 0; row < 5; row++) {
//     starPrint = "";
//     for (let col = row; col < 5; col++) {
//         starPrint += "*";
//     }
//     console.log(starPrint);
// }

// - while 버전
let row = 0;
let col = 0;
let starPrint2;

while (row < 5) {
    starPrint2 = "";
    col = row;

    while (col < 5) {
        starPrint2 += "*";
        col++;
    }
    console.log(starPrint2);
    row++;
}

// for ... in : 객체의 속성 키를 반복
const obj = {
    name: "홍길동",
    age: 28,
    job: "도적"
};

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}

// for ... of : 배열을 순회
const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}