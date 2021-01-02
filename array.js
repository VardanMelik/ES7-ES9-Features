const express = require('express');
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