const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running`);
})

async function myFunc() {
    return "Hello";
}
async function MyFuncion() {
    return Promise.resolve('Hello');
}

MyFuncion().then(
    function(value) {},
    function(error) {}
)