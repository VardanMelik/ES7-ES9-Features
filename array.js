const express = require('express');
const { resolve } = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// Base Array
const arr = [1,2,3,4, 'five', NaN];

// Find element using .indexOf
if ( arr.indexOf('five') >= 0) {
    console.log(true);
};

// Find elemen using .includes
if ( arr.includes('five')) {
    console.log(true);
}

// flat() of 1st level
const arr1 = [1,2, [3,4]];
arr1.flat();
console.log('Array1: ' + arr1);

// 
const arr2 = [1,2, [3,4, [5,6]]];
arr2.flat();
console.log('Array2: ' + arr2);

// flat() of 2nd level
const arr3 = [1,2, [3,4, [5,6]]];
arr3.flat(2);
console.log(arr3);

// flat() of Infinity level
const arr4 = [1,2 [3,4, [5,6, [7,8], 9,10]]];
arr4.flat(Infinity);
console.log(arr4);

// Using of .flatMap()
/*const arr7 = [[1], [2], [3], [4]];
arr7.flapMap(x => [x]);*/

// Async Iterators

// Base Array (iterabl instance)
const names = ['Jack', 'Max', 'Leo'];

// for-of iteration
for (let name of names) {
    console.log(name);
};

// Base async Array
const namesAsync = [
    new Promise(resolve => resolve('Jack')),
    new Promise(resolve => resolve('Max')),
    new Promise(resolve => resolve('Leo'))
];

// Async function for iteration with 'for-of '
/*const showNames = async () => {
    for (let name of names) {
        console.log('For of ' + name);
    }
};

showNames(); */
// Promise

//Async function for iteration with 'for-await-of'
const showNames = async () => {
    for await (let name of names) {
        console.log('For Await of: ' + name);
    }
};

showNames();

