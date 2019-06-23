const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const express = require('express');
const path = require('path');
// 3rd party package we installed using npm install --save body-parser
const bodyParser = require('body-parser');

const app = express();

// parses body through forms and calls next, this will always run
app.use(bodyParser.urlencoded({extended : false}));

// automatically consider all the routes in admin js order still matters
app.use('/admin',adminRoutes); 
app.use(shopRoutes);

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);