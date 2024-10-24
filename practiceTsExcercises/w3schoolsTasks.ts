/*Can you write a function that takes an array 
of numbers and returns a new array containing only the even numbers?*/

const arrOfNumbers: number[] = [3,4,2,5,6,7,9,8];

const justEvens = (array: number[]): number[] => {
    return array.filter(item => item % 2 === 0);
};

console.log(justEvens(arrOfNumbers));

/*Write a function called mergeObjects that takes two objects as 
parameters and merges them into a new object. If there are properties 
in both objects with the same key, the values from the second object 
should overwrite those from the first object. Please write the code for it. */

type objects = {
    name: string,
    age: number,
    color?: string[],
    isAlive?: boolean,
    country?: string
};

const firstPet: objects = {
    name: "dog",
    age: 13,
    color: ["yellow", "black", "white"]
};

const secondPet: objects = {
    name:"cat",
    age: 3,
    isAlive: true,
    country: "Mexico"
};

const mergeObjects = (objct1: objects, object2: objects): objects => {
return {...objct1, ...object2};
};

console.log(mergeObjects(firstPet, secondPet));

/*Implement a Function to Find the Maximum Number in an Array. Write a 
function called findMax that takes an array of numbers as an argument and 
returns the maximum number in that array. If the array is empty, it should return null. */

const arrNumber: number[] = [59, 35, 37, 56, 73, 100, 40, 17, 3];

const findMax = (array: number[]): number | null => {
if(array.length === 0) {
    return null;
} else {
    return Math.max(...array);
};
};

console.log(findMax(arrNumber));

/*Create a Function to Flatten an Array. Write a function called flattenArray
that takes an array of arrays and flattens it into a single array. For example,
 if the input is [[1, 2], [3, 4], [5]], the output should be [1, 2, 3, 4, 5]. */

const arrayOfArrays: number [][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]]

const flattenArray = (arrays: number[][]): number[] => {
    let newArr: number[] = []
    for (const array of arrays) {
        newArr.push(...array);
    };
    return newArr;
};

console.log(flattenArray(arrayOfArrays));

/*Create a Function to Count Vowels in a String. Write a function called 
countVowels that takes a string as an argument and returns the number of 
vowels (a, e, i, o, u) in that string, regardless of the case (upper or lower). */

const phrase: string = "Dancing under the starry sky";

const countVowels = (str: string): number => {
const arrOfVowels: string[] = ["a", "e", "i", "o", "u"];
let count: number = 0;
for (const letter of str.toLowerCase()) {
    if (arrOfVowels.includes(letter)) {
        count += 1;
    }
};
    return count;
};

console.log(countVowels(phrase));

/*Create a Function to Remove Duplicates from an Array.
Write a function called removeDuplicates that takes an 
array of numbers and returns a new array with the 
duplicates removed. */

