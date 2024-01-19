/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers (a, b) {
//     return a + b;
// }
// let sum = addTwoNumbers(6, 9);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(10,2);
console.log(sum)

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => (a + b);
let sum2 = addTwoNumbers(5, 2);
console.log(sum2)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('hello world');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `this
    is
    multiple
    lines`
);
console.log(returnMultipleLines());


// spread oporators
// 2 arrays. When you push a value to array 2, it also changes it in array 1.
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(6)
console.log(arr2)

// copying an array
// This copies an array and when you push a number to copied array, it does not affect the first array.

let arr3 = [5,6,7];
let arr4 = [...arr3];

arr4.push(8);
console.log(arr4);
