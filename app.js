Array.prototype.customMap = function (cb) {
    // `this` keyword points to the array itself
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }

    return result;
};

const num = [1, 2, 3];



//Task 1


// const newNum = num.some(function (bool) {
//     return bool === true;
// });

// console.log(newNum);


//Task 2

const newNum = num.every(function (num) {

    return num < 5
})

console.log(newNum);