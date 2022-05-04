const express = require('express')
const app = express()


app.listen(3000, ()=>{
    console.log('Servidor funcionando');

 });
 
const rutasHome = require('./routes/main')
app.use('/', rutasHome)