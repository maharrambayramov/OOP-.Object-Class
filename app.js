// Array.prototype.customMap = function (cb) {
//     // `this` keyword points to the array itself
//     const result = [];

//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this));
//     }

//     return result;
// };

const num = [1, 2, 3, 4];



//Task 1


// const newNum = num.some(function (bool) {
//     return bool === true;
// });

// console.log(newNum);


//Task 2

// const newNum = num.every(function (num) {

//     return num < 5
// })

// console.log(newNum);

//Task 3


// const newNum = num.filter(function (num) {
//     return num % 2 == 0
// })

// console.log(newNum);

//Task 4

// const pixels = [768, 562, 1440];

// const newNum = num.forEach(function () {


// })

// console.log(pixels);


//Task 5 

const newNum = num.includes(7)
console.log(newNum);