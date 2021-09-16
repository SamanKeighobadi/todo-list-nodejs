const path = require('path');

const express = require('express');
const {setStatics} = require('./utils/statcis');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}))

//view Engine
app.set('view engine','ejs')

// Routes
app.get('/',(req,res) => {
    res.render('index',{
        title:'Todo List',
        path:'/'
    })
})
app.use('/admin',adminRoutes)

// Statcis 
setStatics(app)

app.listen(PORT,() => console.log(`server is run at port ${PORT}`))