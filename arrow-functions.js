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

// copying an object

let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1};
//pushed a new number to b, does not affect other opjects.
let obj3 = {...obj1, b:9};


console.log('object 2:', obj2);
console.log('object 3:', obj3);

// copying part of an array

let arr5 = [...arr1, { ...obj3}, ...arr4, { ...obj1}, "x", "y", "z" ];
console.log(arr5)

// Rest function
//simple arrow function.

const sumAll1 = (a, b, c) => a + b + c;
let sum1 = sumAll1(1, 2, 3);

console.log(sum1)

// Extra numbers added are ignored

let summ2 = sumAll1(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(summ2);

// Rest function (the ...rest can be called anything you want.)

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for(let i of rest ) {
        sum += i;
    }
    return sum;
}

let summ3 = sumRest(1, 2, 3, 4, 5, 6, 7, 8);
console.log(summ3);
