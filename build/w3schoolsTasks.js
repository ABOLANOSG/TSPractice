"use strict";
const arrOfNumbers = [3, 4, 2, 5, 6, 7, 9, 8];
const justEvens = (array) => {
    return array.filter(item => item % 2 === 0);
};
console.log(justEvens(arrOfNumbers));
const firstPet = {
    name: "dog",
    age: 13,
    color: ["yellow", "black", "white"]
};
const secondPet = {
    name: "cat",
    age: 3,
    isAlive: true,
    country: "Mexico"
};
const mergeObjects = (objct1, object2) => {
    return Object.assign(Object.assign({}, objct1), object2);
};
console.log(mergeObjects(firstPet, secondPet));
const arrNumber = [59, 35, 37, 56, 73, 100, 40, 17, 3];
const findMax = (array) => {
    if (array.length === 0) {
        return null;
    }
    else {
        return Math.max(...array);
    }
    ;
};
console.log(findMax(arrNumber));
const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
const flattenArray = (arrays) => {
    let newArr = [];
    for (const array of arrays) {
        newArr.push(...array);
    }
    ;
    return newArr;
};
console.log(flattenArray(arrayOfArrays));
const phrase = "Dancing under the starry sky";
const countVowels = (str) => {
    const arrOfVowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (const letter of str.toLowerCase()) {
        if (arrOfVowels.includes(letter)) {
            count += 1;
        }
    }
    ;
    return count;
};
console.log(countVowels(phrase));
//# sourceMappingURL=w3schoolsTasks.js.map