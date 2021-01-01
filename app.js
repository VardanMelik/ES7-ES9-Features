const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running`);
})

// .entries() for Object
const user = {
    firstName: 'Yauhen',
    lastName: 'Kavalchuk',
};

// .entries() for Array
const name =  ['Y', 'a', 'u', 'h', 'e', 'n'];

// .entries ignore Symbol key
const admin = {
    [Symbol('password')]: '123pass',
    name: 'Yauhen'
};

const es9Object = Object.entries(user);
const es9Array  = Object.entries(name);
const es9Symbol = Object.entries(admin);

// Array to Object
// .fromEntries() using
const arr = [['one', 2], ['two', 2], ['three', 3]];
const es9ArrayToObj = Object.fromEntries(arr);

// .values() using
const userVal = {
    firstName: 'Gagik',
    lastName: 'Varotyan'
};

const es9Val = Object.values(userVal);


// We use for cloning Objects
//getOwnPropertyDescriptors()

// Setter  Getter
const person = {
    name: 'Max',
    age: 30,
    set personName(name) {
        this.name = name;
    },
    get password() {
        return `${this.name} ${this.age}`;
    },
};

const object1 = {
    property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);

console.log(descriptor1.value);


/*console.log(person);
console.log(person.password);
console.log(Object.getOwnPropertyDescriptor(person));
*/


app.get('/es9', (req, res) => {
    res.json(es9Val);
})

