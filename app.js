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


app.get('/es9', (req, res) => {
    res.json(es9Symbol);
})

