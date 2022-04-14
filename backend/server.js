const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');         //ou bien require('./config/dbConnect')();
const User = require('./models/User');
const usersRoute =require('./routes/usersRoute');
const error =require('./middlewares/errorMiddlewareHandler');
const app = express(); 


//Passing body data
app.use(express.json());     //we want to pass an incoming data as a json file from our app


//connect DB 
dbConnect();


//routes
app.use('/api/users',usersRoute);


//Error middelware
app.use(error.errorMiddlewareHandler);


//server
const PORT =process.env.PORT || 5000 ;
app.listen(PORT, () =>{
    console.log('Server is up and runing ');
});

