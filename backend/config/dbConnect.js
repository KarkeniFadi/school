const mongoose = require('mongoose');

//connect DB 
const dbConnect = () => {
    mongoose.connect('mongodb+srv://schooll:I4P2sbv6D7VTJDAU@school.4hxh9.mongodb.net/school_trait', {      //EoNZ1QkaT4LcFfnS
  useUnifiedTopology: true,
  useNewUrlParser:true,
}).then(()=> console.log('Db Connected'))
.catch(err => console.log(err));
};

module.exports = dbConnect;