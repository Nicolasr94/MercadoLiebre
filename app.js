const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const PORT= process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log("servidor corriendo en puerto 3000")
})

app.use(express.static(publicPath));

// app.listen(3000,() =>{
//     console.log("funciona")
// });


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname,'/views/register.html'));
})

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname,'/views/login.html'))
})