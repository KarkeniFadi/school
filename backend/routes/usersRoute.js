const express =require ('express');
const asynHandler = require('express-async-handler');
const User =require('../models/User');
const usersRoute = express.Router();   //instance of express router


//Register
usersRoute.post(
    '/register',
    asynHandler(async (req, res) => {

    const { name, email, password } = req.body;
    const userExists = await User.findOne({email: email});

    if (userExists) {
        throw new Error('User Exist');
    }
    const userCreated = await User.create({email, name, password});

    res.send(userCreated);

}));




//login
usersRoute.post(
           '/login',
            asynHandler(async (req, res) => {

    const { email, password} = req.body;
    //var email = req.body.email;
    //var password = req.body.password;
    const user = await User.findOne({ email });
   
    if (user) {
      res.status(200);

      res.json({
      _id: user._id ,
      name: user.name ,
      password: user.password,
      email: user.email
      });

     } else {
       res.status(401);
       throw new Error ('Invalid credentials');
       
     }
     }));


//Update User
usersRoute.put('/update',(req,res)=> {
    res.send('update route'); 
  });
  


  //Delete User
  usersRoute.delete('/:id',(req,res)=> {
    res.send('delete route');
  });
  

  
//fetch user
usersRoute.get('/',(req,res)=> {
    res.send('fetch users');
  });
  

module.exports = usersRoute;