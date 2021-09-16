const path = require('path');

const express = require('express');
const {setStatics} = require('./utils/statcis');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}))

//view Engine
app.set('view engine','ejs')

// Routes

// Statcis 
setStatics(app)

app.listen(PORT,() => console.log(`server is run at port ${PORT}`))