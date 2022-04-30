const mongoose = require("mongoose");

const archiveSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    description: {
      type: String,
    },

    role: {
      type: String,
      enum: ["Student", "Teacher", "Admin", "Doc"],
      default: "Doc",
    },
  },
  {
    timestamps: true,
  }
);

const Archive = mongoose.model("Archive", archiveSchema);

module.exports = Archive;
