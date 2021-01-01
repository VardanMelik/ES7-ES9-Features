const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running`);
});

app.get('/math', (req, res) => {
    res.json(Math.pow(7,2));
    console.log( (7**2) + (5**3) / (2**4));
})

const user = {
    firstName: "Yauu",
    lastName:   "Kavalchuk",
    age: 30
};

function Person( name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}