const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});

// Base String
const str = 'test';

// padStart() with argument
const start = str.padStart(10, '~'); // '~~~~~~~~~test'
const end = str.padEnd(10, '~~~~~~~~~'); // 'test ~~~~~~'
console.log('Start ' + start);
console.log('End ' + end)

// padStart without of argument
const startWithout = str.padStart(10);
const endWithout = str.padEnd(10);

console.log(startWithout);
console.log(endWithout);

// Base String
const stringTest = '     Hello, your name is Gagik Malyan     ';

// .startsWith using
console.log(stringTest.startsWith('Hello'));
console.log(stringTest.startsWith('Hi'));

console.log(stringTest.endsWith('Malyan'));
console.log(stringTest.endsWith('Jack'));

console.log(stringTest.trim())
console.log(stringTest.trimEnd());