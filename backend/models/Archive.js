const mongoose = require('mongoose');



const archiveSchema = new mongoose.Schema(
  {
    
    fullName: {
      type: String,
      required: true,
    },
     picture: {
        type: String,
        required:true,
      },

      role: {
        type: String,
        enum : ['Student','Teacher','administrative'],
        default: 'Student'
    },
    
  },
  {
    timestamps: true,
  }
);




const Archive = mongoose.model('Archive', archiveSchema);

module.exports = Archive;
