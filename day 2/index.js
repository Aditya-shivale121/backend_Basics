const express = require("express");
const app = express();
const port = 3000;

app.listen(port,() =>{
console.log(`app is listening on ${port}`)
});

// app.use((req ,res) =>{
//     res.send({
//         apple:'red',
//         banana: 'yellow'
//     })
//     console.log('request recived');
// })

// setting path 

app.get("/", (req , res) => {
    res.send('you contacted root path')
})

app.get("/search", (req , res) =>{
    res.send('You contacted Search path')
})

// // this is for the all invalid path custom responce
// app.get("*", (req,res) =>{
//     res.send("Invalid path check the url")
// })