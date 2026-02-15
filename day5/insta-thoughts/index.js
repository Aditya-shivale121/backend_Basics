const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const {v4 : uuidv4} = require('uuid');


app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname ,'/views'))
app.use(express.static(path.join(__dirname ,'public')))

app.listen(port , () =>{
    console.log(`App is listening on ${port}`);
})

let posts = [
    {
     id : uuidv4(),
     username : 'Aditya',
     content : 'Finicial eduction is the key to wealth'

},
    {
     id : uuidv4(),
     username : 'Raj',
     content : 'Finicial eduction is the key to wealth'

},
    {
     id : uuidv4(),
     username : 'pratik',
     content : 'Finicial eduction is the key to wealth'

},
    {
     'id' : uuidv4(),
     username : 'prem',
     content : 'Finicial eduction is the key to wealth'

},
   
]

app.get('/' , (req ,res) => {
    res.send(`app is working well`);
})

app.get('/posts',(req,res) =>{
     res.render('index.ejs' ,{posts})
})