const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');


//schema

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save',async function(next){             //before the s  ve we can do so , save is the name of middelware and a function to run 
    const salt =await bcrypt.genSalt(10);               // next : to next middelware     10 nbre de tour generer le tri
    this.password=await bcrypt.hash(this.password, salt);  // pass la9dim t3ayatlou lel saltu
    next();
});
const User = mongoose.model('User',UserSchema);

module.exports = User;



//for validations