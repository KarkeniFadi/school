const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');         //ou bien require('./config/dbConnect')();
const app = express();


//connect DB 
dbConnect();



//routes
//Users routes

//Register
app.post('/api/users/register',(req,res)=> {
  res.send('Register route'); 
});

//login
app.post('/api/users/login',(req,res)=> {
  res.send('login route');
});

//Update User
app.put('/api/users/update',(req,res)=> {
  res.send('update route'); 
});

//Delete User
app.delete('/api/users/:id',(req,res)=> {
  res.send('delete route');
});


//fetch user
app.get('/api/users',(req,res)=> {
  res.send('fetch users');
});

  //server
const PORT =process.env.PORT || 5000 ;
app.listen(PORT, () =>{
    console.log('Server is up and runing ');
});

