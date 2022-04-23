const express = require('express');
const asynchHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const authMiddlware = require('../middlewares/authMiddleware');
const Archive = require('../models/Archive');
const User = require('../models/User');
const authTokenGenerator = require('../utils/generateToken');
const archiveRouter = express.Router();

//Create Book
archiveRouter.post(
  '/',

  asynchHandler(async (req, res) => {
    try {
      const archive= await Archive.create(req.body);
      res.status(200);
      res.json(archive);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

archiveRouter.get(
  '/',
  asynchHandler(async (req, res) => {
    const archives = await Archive.find().populate('createdBy').sort('createdAt');
    //Compare password
    if (archives) {
      res.status(201);
      res.send(archives);
    } else {
      res.status(401);
      throw new Error('Server error');
    }
  })
);

//Delete book

archiveRouter.delete(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const archive = await Archive.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(archive);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);

//Update

archiveRouter.put(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const archive= await Archive.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(archive);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

//find a book
archiveRouter.get(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const archive= await Archive.findById(req.params.id);
      res.status(200);
      res.send(archive);
    } catch (error) {
      res.status(500);
      throw new Error('No archive found');
    }
  })
);
module.exports = archiveRouter;
