const express = require("express");
const {
  create,
  deleteOne,
  update,
  findOne,
  findAll,
} = require("../controllers/archiveController");
const authMiddlware = require("../middlewares/authMiddleware");
const archiveRouter = express.Router();

//Create Archive
archiveRouter.post("/", authMiddlware, create);
//get Archive
archiveRouter.get("/", authMiddlware, findAll);
//Delete Archive
archiveRouter.delete("/:id", authMiddlware, deleteOne);
//update Archive
archiveRouter.put("/:id", authMiddlware, update);
//find one Archive
archiveRouter.get("/:id", authMiddlware, findOne);

module.exports = archiveRouter;
