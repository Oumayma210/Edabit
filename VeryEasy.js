//1How Edabit Works
function hello() {
    return "hello edabit.com";
}
console.log(hello());
//2Return the First Element in an Array

function getFirstValue(arr) {
    arr = [1, 2, 3, 4, 5, 6];
    return arr[0];
}
console.log(getFirstValue());

//3Convert Age to Days
function calcAge(age) {
    age = 25;
    var days = age * 365;
    return days;
}
console.log(calcAge());
//4Maximum Edge of a Triangle
function nextEdge(side1, side2) {
    side1 = 5;
    side2 = 5;
    return side1 + side2 - 1;
}
console.log(nextEdge());
//5Buggy Code (Part 1)

function cubes(a) {
    a = 3;
    return a ** 3;
}
console.log(cubes());
//6Convert Hours into Seconds
function howManySeconds(hours) {
    hours = 5;
    return hours * 60;
}
console.log(howManySeconds());
//7Return the Remainder from Two Numbers
function remainder(x, y) {
    x = 4;
    y = 6;
    return x % y;
}
console.log(remainder());
//8Area of a Triangle
function triArea(base, height) {
    base = 5;
    height = 6;
    return (base * height) / 2;
}
console.log(triArea());
//9Return the Next Number from the Integer Passed

function addition(num) {
    num = 6;
    return num + 1;
}
console.log(addition());
//10Correct the Mistakes
function squared(a) {
    a = 5;
    return a * a;
}
console.log(squared());
//11Power Calculator

function circuitPower(voltage, current) {
    voltage = 10;
    current = 25;
    return voltage * current;
}
console.log(circuitPower());
//12Find the Perimeter of a Rectangle

function findPerimeter(length, width) {
    length = 10;
    width = 6;
    return (length + width) * 2;
}
console.log(findPerimeter());
//13
function points(twoPointers, threePointers) {
    twoPointers = 7;
    threePointers = 5;
    return twoPointers * 2 + threePointers * 3;
}
console.log(points());
//14
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(0));
//15
function sumPolygon(n) {
    return (n - 2) * 180;
}
console.log(sumPolygon(3));
//16
function lessThan100(a, b) {
    if (a + b < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(50, 40));
//17
function nameString(name) {
    name = "aamal";
    var b = "Edabit";
    var result = name + b;
    return result;
}
console.log(nameString());
//18
function isSameNum(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}
console.log(isSameNum(1, 15));
//19
function and(a, b) {
    return a && b;
}
console.log(and(true, true));
//20
function animals(chickens, cows, pigs) {
    var x = 5;
    var y = 6;
    var z = 7;
    return x * 2 + y * 4 + z * 4;
}
console.log(animals());
//21
function footballPoints(wins, draws, losses) {
    var x = 3;
    var y = 4;
    var z = 2;
    return x * 3 + y * 1 + z * 0;
}
console.log(footballPoints());
//22
function checkEquality(a, b) {
    return a === b;
}
console.log(checkEquality("a", true));
//23
function isSeven(x) {
    if (x === 7) {
        return true;
    } else {
        return false;
    }
}
console.log(isSeven(7));
//24
function makesTen(a, b) {
    if (a == 10 || b == 10 || a + b == 10) {
        return true;
    } else {
        return false;
    }
}
console.log(makesTen(1, 9));
//25
function calculateFuel(n) {
    if (n * 10 > 100) {
        return n * 10;
    } else {
        return 100;
    }
}
console.log(calculateFuel(60))
