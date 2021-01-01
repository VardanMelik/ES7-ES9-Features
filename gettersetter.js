const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running`);
})

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang(lang) {
        this.language = lang;
    }
/*    get lang() {
        return this.language;
    }*/
}

app.get('/get', (req, res) => {
    res.json(person.language);
})