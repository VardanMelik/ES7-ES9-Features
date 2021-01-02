const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})

//const regEx = /(\d{4})-(\d{2})-(\d{2})/;
const regEx = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const result = regEx.exec('2019-08-23');

//console.log('Result: ' + result);
//console.log('Group result: ' + result.groups);

const str = 'Kavalchuk Yauhen';
const repl = /(?<firstName>[A-Za-z]+) (?<lastName>[A-Za-z]+$)/u;
const newStr = str.replace(repl, '$<lastName>, $<firstName>');

//console.log(newStr);

function test() {

}
//console.log(test.toString());

function greeting() {
    const name = 'webDev';
    console.log(`Hello from ${name}`);
}

//console.log(greeting.toString());

// Symbol
const mySymbol = Symbol('Symbol description');

//String(mySymbol) === 
