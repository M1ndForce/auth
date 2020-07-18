const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test1:Qwerty512@cluster0.x3p1t.gcp.mongodb.net/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to db /auth !!!!'))
    .catch(error => console.log(error.message));


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log('Server start')
});