const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'/views'));

app.get('/', (req ,res) =>{
    res.render('home');
})

app.get('/role', (req ,res) =>{
    res.render('roledice')
})

app.get('/ig/:username', (req ,res) =>{
    const instaData = require('./data.json');
    let { username } = req.params;
    const data = instaData[username]
    let user = ['ram','sham','kam'];
    // res.render('insta' ,{username , user});
    console.log(username)
    res.render('insta' , data);
})

app.listen(port , () => {
    console.log(`App is listening on ${port}`);
})