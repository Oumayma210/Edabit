//1 how much is true?
function countTrue(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}
console.log(countTrue([true, false, true, false, true]));
//2 return fct

function redundant(str) {
    return function () {
        return str;
    };
}
console.log(redundant("hi"));
//3
function shiftToRight(x, y) {
    x = 80;
    y = 3;
    return Math.floor(x / Math.pow(2, y));
}
console.log(shiftToRight());
//4
function possibleBonus(a, b) {
    const diff = a - b;
    return diff < 0 && diff >= -6;
}
console.log(possibleBonus(3, 7));
//5

function addName(obj, name, value) {
    return { ...obj, [name]: value };
}
console.log(addName({}, "amal", 3));
//6
function derivative(b, m) {
    return b * m ** (b - 1);
}
console.log(derivative(3, -2));
//7
function concat(...args) {
    return [].concat(...args);
}
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
//8
function rev(n) {
    return Math.abs(n).toString().split("").reverse().join("");
}
console.log(rev(321));
//9
function intWithinBounds(n, lower, upper) {
    if (Number.isSafeInteger(n) && lower <= n && n < upper) {
        return true;
    } else {
        return false;
    }
}
console.log(intWithinBounds(6, 1, 6));
//10
function keysAndValues(obj) {
    var keys = Object.keys(obj);
    return [keys, keys.map((key) => obj[key])];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//11

