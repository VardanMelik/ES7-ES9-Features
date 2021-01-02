const express = require('express');
const { resolve } = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running`);
})

app.get('/test', (req, res) => {
    res.json(req.body);
});
/*
function resolveAfter2Seconds() {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve('resolved');
        }, 5000);
    })
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log('Result ' + result);
}
asyncCall();*/


const fetchText = () => new Promise( resolve => {
    setTimeout( () => resolve('ES8'), 2000); });

const showText = async () => {
    try {
        const fetchedText = await fetchText();
        console.log(`This is a feature of ${fetchedText}`);
    } catch (e) {
        console.log(e);
    }
};

showText();
