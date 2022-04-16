const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const Archive = require('../models/Archive');

const archiveRouter = express.Router();

//Create Archive
archiveRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const archive = await Archive.create(req.body);

    if (archive) {
      res.status(200);
      res.json(archive);
    } else {
      res.status(500);
      throw new Error('Archive creating failed');
    }
  })
);

//Create Archive
archiveRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const archive = await Archive.find({});

    if (archive) {
      res.status(200);
      res.json(archive);
    } else {
      res.status(500);
      throw new Error('There are no Archive');
    }
  })
);

archiveRouter.put(
  '/:id',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const archive = await Archive.findById(req.params.id);

    if (archive) {
      const updatedArchive = await Archive.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200);
      res.json(updatedArchive);
    } else {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

archiveRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    try {
      const archive = await Archive.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(archive);
    } catch (error) {
      res.json(error);
    }
  })
);

module.exports = archiveRouter;
