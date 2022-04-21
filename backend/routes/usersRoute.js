const express =require ('express');
const asynHandler = require('express-async-handler');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const User =require('../models/User');
const generateToken = require('../utils/generateToken');
const usersRoute = express.Router();   //instance of express router


//Register
usersRoute.post(
    '/register',
    asynHandler(async (req, res) => {

    const { firstName,lastName, email, password ,role} = req.body;
    const userExists = await User.findOne({email: email});

    if (userExists) {
        throw new Error('User Exist');
    }
    const userCreated = await User.create({ firstName,lastName, email, password ,role});

    
    res.json({
      _id: userCreated._id ,
      firstName: userCreated.firstName ,
      lastName: userCreated.lastName ,
      password: userCreated.password,
      email: userCreated.password,
      role: userCreated.role ,
      token: generateToken(userCreated._id),
      });

}));




//login
usersRoute.post(
           '/login', authMiddleware,
            asynHandler(async (req, res) => {

            const { email, password} = req.body;
            const user = await User.findOne({ email });
   

    if (user && await user.isPasswordMatch(password) ) {

      res.status(200);

      res.json({
      _id: user._id ,
      lastName: user.lastName ,
      firstName: user.firstName ,
      password: user.password,
      email: user.password,
      role: user.role,
      token: generateToken(user._id),
      });

     } else {
       res.status(401);
       throw new Error ('Invalid credentials');
       
     }
     }));


//update user
usersRoute.put(
  '/update', authMiddleware,
  expressAsyncHandler(async (req, res) => {
    //Find the login user by ID
    const user = await User.findById(req.user._id);

    if (user) {
      user.lastName = req.body.lastName || user.lastName;
      user.firstName = req.body.firstName || user.firstName;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        lastName: updatedUser.lastName,
        firstName: updatedUser.firstName,
        email: updatedUser.email,
        token: generateToken(updatedUser._id),
      });
    }
  })
);

//Delete user
usersRoute.delete('/:id', (req, res) => {
  res.send('Delete route');
});

//fetch Users
usersRoute.get(
  '/',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500);

      throw new Error('No users found at the moment');
    }
  })
);

module.exports = usersRoute;
