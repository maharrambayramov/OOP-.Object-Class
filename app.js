
Array.prototype.customMap = function (cb) {
    // `this` keyword points to the array itself
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }

    return result;
};

const num = [1, 2, 3];


const newNum = num.some(function (bool) {
    return bool === true;
});

console.log(newNum); 
