//1
function minMax(arr) {
    arr = [1, 2, 3, 4, 5];
    let arr1 = [];
    arr1.push(Math.min(...arr));
    arr1.push(Math.max(...arr));
    return arr1;
}
console.log(minMax());
//2
function whichIsLarger(f, g) {
    if (f > g) {
        return "f";
    } else if (f < g) {
        return "g";
    } else {
        return "neither";
    }
}
console.log(whichIsLarger(9, 10));
//3
function addUp(num) {
    x = 0;
    for (let i = 0; i < num; i++) {
        x = x + i;
    }
    return x;
}

console.log(addUp(5));
//4Check if One Array can be Nested in Another
function canNest(arr1, arr2) {
    arr1 = [1, 2, 3, 4, 5];
    arr2 = [0, 6];
    return (
        Math.min(...arr1) > Math.min(...arr2) &&
        Math.max(...arr1) < Math.max(...arr2)
    );
}
console.log(canNest());
//5Matchstick Houses
function matchHouses(step) {
    if (step > 0) {
        matchSticks = step * 6 - (step - 1);
        return matchSticks;
    } else {
        matchSticks = 0;
        return matchSticks;
    }
}
console.log(matchHouses(4));

//6
function shiftToLeft(x, y) {
    return y ? shiftToLeft(x * 2, --y) : x;
}
console.log(shiftToLeft(5, 1));
//7
function binary(decimal) {
    let result = "";
    if (decimal == 0) {
        result = "0";
    }
    while (decimal > 0) {
        result += decimal % 2;
        decimal = Math.floor(decimal / 2);
    }
    return result.split("").reverse().join("");
}

console.log(binary(5));
//8 grid
//formule
function numberSquares(n) {
    var number = (n * (2 * n + 1) * (n + 1)) / 6;
    return number;
}
//9
// function tuckIn(arr1, arr2) {
//     arr2 = [1, 2, 3, 4, 5, 6];
//     arr1 = [0, 7];
//     let finalValue = arr1.pop();
//     for (i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i]);
//     }
//     arr1.push(finalValue);
//     return arr1;
// }
// console.log(tuckIn());
//9
function tuckIn(a1, a2) {
    a1.splice(1, 0, ...a2);
    return a1;
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
//10
function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}
console.log(bitwiseXOR(5, 3));
console.log(bitwiseAND(5, 3));
console.log(bitwiseOR(5, 3));
//11
function charCount(string1, string2) {
    let a = 0;
    string1 = "a";
    string2 = "chaima";
    for (let i = 0; i < string2.length; i++) {
        if (string1 === string2[i]) {
            a += 1;
        }
    }
    return a;
}
console.log(charCount());
//12
//ceil:up #floor:down
function numberSplit(n) {
    return [Math.floor(n / 2), Math.ceil(n / 2)];
}
console.log(numberSplit(9));
//13
function filterArray(arr) {
    return arr.filter((el) => typeof el !== "string");
}
console.log(filterArray([1, 2, 3, "a", 4]));
//14
const str = "Hello world !";
const repeat = (str, n) => {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += str[i].repeat(n);
    }
    return res;
};
console.log(repeat(str, 2));
//15
function sumOfCubes(nums) {
    var sum = 0;
    for (i in nums) {
        sum += nums[i] * nums[i] * nums[i];
    }
    return sum;
}
console.log(sumOfCubes([1, 2, 3]));
//16
function getOnlyEvens(nums) {
    return nums.filter((num, i) => !(num % 2) && !(i % 2));
}
console.log(getOnlyEvens([1, 2, 2, 4, 5, 6, 7, 8, 9, 9, 10]));
//17
function noOfVowels(string) {
    var listOfVowels = "aAeEiIoOuU";
    var vowelsCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (listOfVowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(noOfVowels("amiraa"));
//18
function factorial(init) {
    let result = 1;

    for (let i = 2; i <= init; i++) {
        result = result * i;
    }

    return result;
}
console.log(factorial(3));
//19
function removeVowels(str) {
    var newArr = str.match(/[^aeiouAEIOU]/g);
    var newString = newArr.join("");
    return newString;
}

console.log(removeVowels("airaa"));
//20
function firstVowel(str) {
    str = "hello";
    var regex = /[aeiou]/gi;
    return str.search(regex);
}
console.log(firstVowel(str));
//21
function repetition(txt, n) {
    var repetiontxt = "";
    while (n > 0) {
        repetiontxt += txt;
        n--;
    }
    return repetiontxt;
}
console.log(repetition("amal", 3));
//22
function myPi(n) {
    return Number(Math.PI.toFixed(n));
}
console.log(myPi());
//23
const sayHelloBye = (name, num) => {
    if (num === 1) {
        return "Hello " + name.charAt(0).toUpperCase() + name.slice(1);
    }
    return "Bye " + name.charAt(0).toUpperCase() + name.slice(1);
};
console.log(sayHelloBye("amal", 1));
//24
function sortDescending(num) {
    let arr = String(num).split("");
    for (i in arr) {
        arr[i] = Number(arr[i]);
    }
    let arr1 = arr.sort((a, b) => a - b);
    return Number(arr1.reverse().join(""));
}
console.log(sortDescending(123));
//25
function highestDigit(number) {
    let arr = number.toString();
    return Math.max(...arr);
}
console.log(highestDigit(759));
