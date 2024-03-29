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

// Destructuring 

//this is not destructuring
let ages = [21, 33, 69];

// let martin = ages[0];
// let michael = ages[1];
// let alex = ages[2];

//destructuring below - commented out code above.

let [martin, michael, alex] = ages;

console.log(martin, michael, alex)

// Destructuing objects

let jobs = {
    mar: 'teacher',
    mic: 'developer',
    ale: 'music',
};

let {mar, mic, ale} = jobs;

console.log(mar, mic, ale);

//destructuring subsets.

let lang = ['english', 'french', 'spanish', 'german'];

let [,,jasonNative, jasonSecond] = lang; //the ,, skip first 2 objects in the array.

console.log(jasonNative, jasonSecond);


//destructuring
let lang2 = {
    first: 'eng',
    second: 'fre',
    third: 'ger',
    forth: 'mex'
};

let {first, forth} = lang2;

console.log(first, forth)


//destructuing using rest paramater.

let fruit = ['apple', 'bananna', 'peach', 'lemon'];
let [fav, sec, ...other] = fruit;
console.log(fav, sec, other);


//destructure 
let people = {
    jon: 'apple',
    carl: 'spice',
    sophine: 'potato'
};

let {jon, carl, ...rest} = people;

console.log(jon, carl, rest);


//map(), filter(), reduce(), going to add map functions
//map = executes a function on all the objects of an array.
//filter - filters out objects in an array
//reduce = reduces all elements to a single output

//simple for loop no map function.
let vals = [1,2,3,4,5];
let valResults = [];

for (let val of vals) {
    valResults.push(val * 2)
};

console.log(valResults);

// using map() method
const multiplyByTwo = function(val) {
    return val * 2;
};

vals.map(multiplyByTwo);

const mapResults = vals.map(multiplyByTwo);
console.log(mapResults);


//simplified with map() method.

const simplified = vals.map(function (val) {return val * 2});
console.log(simplified);

//simplified further with arrow function

const arrow1 = vals.map(val => val * 2);
console.log(arrow1);

//With objects

const students = [
    {
        id: '1',
        name: 'martin',
        profession: 'developer',
        skill: 'java',
        age: 41
},
{
    id: '2',
        name: 'carl',
        profession: 'teacehr',
        skill: 'people',
        age: 12

},
{
    id: '3',
        name: 'sara',
        profession: 'smith',
        skill: 'metal',
        age: 22

},
];

const studentsWithIds = students.map(student => [student.id, student.profession, student.name]);
console.log(studentsWithIds);

// filter() methods. below...

const oldEnough = students.filter(person => person.age >= 22);
console.log(oldEnough);

const sara = students.filter(p => p.name === 'sara') //[0] can be used;
console.log(sara)



const students2 = [
    {
        id: '1',
        name: 'martin',
        profession: 'developer',
        skill: [
            {name: 'java', yrsexp: 2},
            {name: 'python', yrsexp: 5},
            {name: 'css', yrsexp: 1}
        ],
        age: 41
},
{
    id: '2',
        name: 'carl',
        profession: 'teacehr',
        skill: [
            {name: 'java', yrsexp: 1},
            {name: 'python', yrsexp: 9},
            {name: 'css', yrsexp: 0}
        ],
        age: 12

},
{
    id: '3',
        name: 'sara',
        profession: 'smith',
        skill: [
            {name: 'java', yrsexp: 1},
            {name: 'python', yrsexp: 0},
            {name: 'css', yrsexp: 1}
        ],
        age: 22

},
];

const has5YrsExp = skill => skill.yrsexp >=5;
const hasStrongSkills = students2 => students2.skill.filter(has5YrsExp).length > 0;
const candidates = students2.filter(hasStrongSkills);
console.log(candidates)

nameOfCand = candidates.map(c => c.name);
console.log(nameOfCand);

//reduce method

const sumReduce = [1, 2, 3, 4, 5, 6];

let sumRed = sumReduce.reduce((acc, curr) => acc + curr);
let sumRedInitialValue = sumReduce.reduce((acc, curr) => acc + curr, 10);

console.log(sumRed);
console.log(sumRedInitialValue);

//totalling a specific object property (ages from students 2 array)

let totalAges = students2.reduce((acc, curr) => acc + curr.age, 0);
console.log(totalAges);


// Grouping by a property and totaling it too.

const teamMember = [
    {
        name: 'mark',
        prof: 'developer',
        yearxp: 5

    },
    {
        name: 'steve',
        prof: 'developer',
        yearxp: 8

    },
    {
        name: 'paul',
        prof: 'designer',
        yearxp: 2

    },
    {
        name: 'jon',
        prof: 'designer',
        yearxp: 6

    },
];

let experienceByProfession = teamMember.reduce((acc, curr) => {
    let key = curr.prof;
    if (!acc[key]) {
        acc[key] = curr.yearxp;
    } else {
        acc[key] += curr.yearxp;
    }
    return acc;
},{})
console.log(experienceByProfession);

let nameOfEmployees = teamMember.reduce((acc, curr) => {
    let emp = curr.prof;
    if (!acc[emp]) {
        acc[emp] = curr.name;
    } else {
        acc[emp] += curr.name;
    }
    return acc;
},{});

console.log(nameOfEmployees);