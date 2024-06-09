const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const {check, validationResult} = require('express-validator');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname +'/public'));
app.use(express.urlencoded()); 

app.use(session({
    secret: 'superrandomsecret',
    resave: false,
    saveUninitialized: true
}));

app.get('/',function(req,res){
    res.render('login');
});

app.listen(2700, function(){
    console.log('Listening to port 2700');
});